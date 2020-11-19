package io.charlescd.moove.application.user.request

import io.charlescd.moove.domain.User
import java.time.LocalDateTime
import java.util.*
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

data class CreateUserRequest(
    @field:NotBlank
    val name: String,

    val password: String,

    @field:Email(regexp = ".+@.+\\..+", message = "Invalid email")
    val email: String,

    val photoUrl: String?,

    val isRoot: Boolean?
) {
    fun toUser() = User(
        id = UUID.randomUUID().toString(),
        name = name,
        email = email.toLowerCase().trim(),
        photoUrl = photoUrl,
        root = this.isRoot ?: false,
        createdAt = LocalDateTime.now()
    )
}
