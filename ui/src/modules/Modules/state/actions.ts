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

import { Module } from '../interfaces/Module';
import { Component } from '../interfaces/Component';
import { ModulePagination } from '../interfaces/ModulePagination';

export enum ACTION_TYPES {
  loadModules = 'MODULES/LIST',
  loadModule = 'MODULES/GET',
  loadComponent = 'MODULES/ADD_COMPONENT',
  resetModule = 'MODULE/RESET',
  resetModules = 'MODULES/RESET'
}

interface LoadModulesActionType {
  type: typeof ACTION_TYPES.loadModules;
  payload: ModulePagination;
}

interface LoadModuleActionType {
  type: typeof ACTION_TYPES.loadModule;
  payload: Module;
}

interface LoadComponentActionType {
  type: typeof ACTION_TYPES.loadComponent;
  payload: Component;
}

interface ResetModuleActionType {
  type: typeof ACTION_TYPES.resetModule;
}

interface ResetModulesActionType {
  type: typeof ACTION_TYPES.resetModules;
}

export const loadModulesAction = (
  payload: ModulePagination
): LoadModulesActionType => ({
  type: ACTION_TYPES.loadModules,
  payload
});

export const loadModuleAction = (payload: Module): LoadModuleActionType => ({
  type: ACTION_TYPES.loadModule,
  payload
});

export const loadComponentAction = (
  payload: Component
): LoadComponentActionType => ({
  type: ACTION_TYPES.loadComponent,
  payload
});

export const resetModuleAction = (): ResetModuleActionType => ({
  type: ACTION_TYPES.resetModule
});

export const resetModulesAction = (): ResetModulesActionType => ({
  type: ACTION_TYPES.resetModules
});

export type ModulesActionTypes =
  | LoadModulesActionType
  | LoadModuleActionType
  | LoadComponentActionType
  | ResetModuleActionType
  | ResetModulesActionType;
