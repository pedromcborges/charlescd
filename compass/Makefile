GOCMD=go
GORUN=$(GOCMD) run
GOBUILD=$(GOCMD) build
GOBUILDPLUGIN=$(GOCMD) build -buildmode=plugin
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
GOTOOL=$(GOCMD) tool

DIST_PATH=dist
CMD_PATH=cmd/*.go
BINARY_NAME=compass

COMPOSE_TESTS=./test/docker-compose.test.yaml


start:
				sh build-plugins.sh
				$(GORUN) $(CMD_PATH)
build: 
				$(GOBUILD) -o $(DIST_PATH)/$(BINARY_NAME) $(CMD_PATH)

local-tests:
				$(GOTEST) ./...
tests:
				make tests-dep-up
				$(GOTEST) ./...
tests-dep-up:
				docker-compose -f $(COMPOSE_TESTS) up -d --build db provider
				sh ./test/build-plugins.test.sh
				sh ./build-plugins.sh
tests-dep-down:
				docker-compose -f $(COMPOSE_TESTS) down
cover:
				$(GOTEST) -v -coverpkg ./internal/action,./internal/datasource,./internal/dispatcher,./internal/metric,./internal/metricsgroup,./internal/metricsgroupaction,./internal/moove,./internal/plugin ./internal/tests/ -coverprofile=cover.out
				$(GOTOOL) cover -func=cover.out
cover-browser:
				$(GOTEST) -v -coverpkg ./internal/action,./internal/datasource,./internal/dispatcher,./internal/metric,./internal/metricsgroup,./internal/metricsgroupaction,./internal/moove,./internal/plugin ./internal/tests/ -coverprofile=cover.out
				$(GOTOOL) cover -html=cover.out -o cover.html
				open cover.html