/*
 * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateStatusDeploymentUndeployment20200429160400 implements MigrationInterface {

  public async up(queryRunner: QueryRunner) : Promise<void> {
    await queryRunner.query('UPDATE DEPLOYMENTS SET STATUS =\'SUCCEEDED\' where status=\'FINISHED\'')
    await queryRunner.query('UPDATE MODULE_DEPLOYMENTS SET STATUS =\'SUCCEEDED\' where status=\'FINISHED\'')
    await queryRunner.query('UPDATE COMPONENT_DEPLOYMENTS SET STATUS =\'SUCCEEDED\' where status=\'FINISHED\'')
    await queryRunner.query('UPDATE COMPONENT_UNDEPLOYMENTS SET STATUS =\'SUCCEEDED\' where status=\'FINISHED\'')
    await queryRunner.query('UPDATE MODULE_UNDEPLOYMENTS SET STATUS =\'SUCCEEDED\' where status=\'FINISHED\'')
    await queryRunner.query('UPDATE UNDEPLOYMENTS SET STATUS =\'SUCCEEDED\' where status=\'FINISHED\'')
  }

  public async down(queryRunner: QueryRunner) : Promise<void> {
    await queryRunner.query('UPDATE DEPLOYMENTS SET STATUS =\'FINISHED\' where status=\'SUCCEEDED\'')
    await queryRunner.query('UPDATE MODULE_DEPLOYMENTS SET STATUS =\'FINISHED\' where status=\'SUCCEEDED\'')
    await queryRunner.query('UPDATE COMPONENT_DEPLOYMENTS SET STATUS =\'FINISHED\' where status=\'SUCCEEDED\'')
    await queryRunner.query('UPDATE COMPONENT_UNDEPLOYMENTS SET STATUS =\'FINISHED\' where status=\'SUCCEEDED\'')
    await queryRunner.query('UPDATE MODULE_UNDEPLOYMENTS SET STATUS =\'FINISHED\' where status=\'SUCCEEDED\'')
    await queryRunner.query('UPDATE UNDEPLOYMENTS SET STATUS =\'FINISHED\' where status=\'SUCCEEDED\'')
  }

}
