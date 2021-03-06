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

package io.charlescd.villager.test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.charlescd.villager.infrastructure.integration.registry.authentication.DockerBasicAuthResponse;
import io.charlescd.villager.infrastructure.integration.registry.authentication.DockerBearerAuthenticator;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@ExtendWith(MockitoExtension.class)
public class DockerBearerAuthenticatorTest {

    @Test
    public void createAuthUrl() {
        var organization = "org";
        var username = "user";
        var password = "pass";
        var imageName = "image";
        var authUrl = "https://auth.docker.io";
        var service = "registry.docker.io";

        var auth = new DockerBearerAuthenticator(organization, username, password, imageName, authUrl, service);

        assertThat(auth.createAuthUrl(), is("https://auth.docker.io?service=registry.docker.io&scope=repository:org/image:pull"));
    }

    @Test
    public void buildDockerBasicAuthResponse() throws JsonProcessingException {
        var token = "token";
        var accessToken = "access_token";
        var expiresIn = 300;
        var issuedAt = "2020-09-25T15:33:20.298629582Z";

        var response = "{\"token\": \"token\", \"access_token\": \"access_token\",\"expires_in\": 300,\"issued_at\": \"2020-09-25T15:33:20.298629582Z\"}\n";

        var dockerBasicAuthResponse = new ObjectMapper().readValue(response, DockerBasicAuthResponse.class);

        assertThat(dockerBasicAuthResponse.getToken(), is(token));
        assertThat(dockerBasicAuthResponse.getAccessToken(), is(accessToken));
        assertThat(dockerBasicAuthResponse.getExpiresIn(), is(expiresIn));
        assertThat(dockerBasicAuthResponse.getIssuedAt(), is(issuedAt));
    }

    @Test
    public void buildDockerBasicAuthResponseMissingAccessToken() throws JsonProcessingException {
        var token = "token";
        var expiresIn = 300;
        var issuedAt = "2020-09-25T15:33:20.298629582Z";

        var response = "{\"token\": \"token\",\"expires_in\": 300,\"issued_at\": \"2020-09-25T15:33:20.298629582Z\"}\n";

        var dockerBasicAuthResponse = new ObjectMapper().readValue(response, DockerBasicAuthResponse.class);

        assertThat(dockerBasicAuthResponse.getToken(), is(token));
        assertThat(dockerBasicAuthResponse.getExpiresIn(), is(expiresIn));
        assertThat(dockerBasicAuthResponse.getIssuedAt(), is(issuedAt));
    }
}
