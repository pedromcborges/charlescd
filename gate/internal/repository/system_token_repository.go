package repository

import (
	"fmt"
	"github.com/ZupIT/charlescd/gate/internal/domain"
	"github.com/ZupIT/charlescd/gate/internal/logging"
	"github.com/ZupIT/charlescd/gate/internal/repository/models"
	"github.com/ZupIT/charlescd/gate/internal/utils/mapper"
	"github.com/google/uuid"
	"github.com/nleof/goyesql"
	"gorm.io/gorm"
)

type SystemTokenRepository interface {
	Create(systemToken domain.SystemToken) (domain.SystemToken, error)
	FindAll(pageRequest domain.Page) ([]domain.SystemToken, domain.Page, error)
	FindById(id uuid.UUID) (domain.SystemToken, error)
}

type systemTokenRepository struct {
	db      *gorm.DB
	queries goyesql.Queries
}

func NewSystemTokenRepository(db *gorm.DB, queriesPath string) (SystemTokenRepository, error) {
	queries, err := goyesql.ParseFile(fmt.Sprintf("%s/%s", queriesPath, "system_token_queries.sql"))
	if err != nil {
		return systemTokenRepository{}, err
	}

	return systemTokenRepository{db: db, queries: queries}, nil
}

func (systemTokenRepository systemTokenRepository) Create(systemToken domain.SystemToken) (domain.SystemToken, error) {
	systemToken.ID = uuid.New()
	systemTokenToSave := mapper.SystemTokenDomainToModel(systemToken)

	if res := systemTokenRepository.db.Save(&systemTokenToSave); res.Error != nil {
		return domain.SystemToken{}, handlerError("Save system token failed", "unit.Create.Save", res.Error, "")
	}
	return systemToken, nil
}

func (systemTokenRepository systemTokenRepository) FindAll(page domain.Page) ([]domain.SystemToken, domain.Page, error) {
	var systemToken []models.SystemToken

	res := systemTokenRepository.db.Where("revoked = false").
		Order(page.Sort).
		Offset(page.Offset()).
		Limit(page.Size).
		Find(&systemToken)

	res = systemTokenRepository.db.Table("system_tokens").
		Where("revoked = false").
		Count(&page.Total)

	if res.Error != nil {
		if res.Error.Error() == "record not found" {
			return []domain.SystemToken{}, page, handlerError("Token not found", "unit.GetById.First", res.Error, logging.NotFoundError)
		}
		return []domain.SystemToken{}, page, handlerError("Find token failed", "unit.GetById.First", res.Error, logging.InternalError)
	}

	systemTokenFound := make([]domain.SystemToken, 0)
	for _, st := range systemToken {
		systemTokenFound = append(systemTokenFound, mapper.SystemTokenModelToDomain(st))
	}

	return systemTokenFound, page, nil
}

func (systemTokenRepository systemTokenRepository) FindById(id uuid.UUID) (domain.SystemToken, error) {
	var systemToken models.SystemToken

	res := systemTokenRepository.db.Model(models.SystemToken{}).Where("id = ?", id).First(&systemToken)
	if res.Error != nil {
		if res.Error.Error() == "record not found" {
			return domain.SystemToken{}, handlerError("Not found token", "unit.GetById.First", res.Error, logging.NotFoundError)
		}
		return domain.SystemToken{}, handlerError("Find token failed", "unit.GetById.First", res.Error, logging.InternalError)
	}
	return mapper.SystemTokenModelToDomain(systemToken), nil
}

func handlerError(message string, operation string, err error, errType string) error {
	return logging.NewError(message, err, errType, nil, operation)
}
