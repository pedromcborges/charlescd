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

package io.charlescd.moove.legacy.repository.entity

import com.fasterxml.jackson.annotation.JsonBackReference
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "modules")
data class Module(

    @field:Id
    val id: String,

    val name: String,

    val gitRepositoryAddress: String,

    val createdAt: LocalDateTime,

    val helmRepository: String,

    @field:ManyToOne
    @field:JoinColumn(name = "user_id")
    val author: User,

    @ManyToMany
    @JoinTable(
        name = "modules_labels",
        joinColumns = [JoinColumn(name = "module_id")],
        inverseJoinColumns = [JoinColumn(name = "label_id")]
    )
    val labels: List<Label>,

    @field:JsonBackReference
    @field:[OneToMany(mappedBy = "module")]
    val components: List<Component> = listOf(),

    @field:ManyToOne
    @field:JoinColumn(name = "workspace_id")
    val workspace: Workspace
)
