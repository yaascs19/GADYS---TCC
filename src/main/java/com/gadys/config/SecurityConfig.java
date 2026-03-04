package com.gadys.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.beans.factory.annotation.Autowired;

@Configuration
public class SecurityConfig {

    @Autowired
    private CorsConfigurationSource corsConfigurationSource;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Ativa o CORS com a configuração vinda de CorsConfig
                .cors(cors -> cors.configurationSource(corsConfigurationSource))
                // Desativa CSRF (necessário em APIs REST)
                .csrf(csrf -> csrf.disable())
                // Define as autorizações de endpoints
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll()  // libera login/cadastro
                        .anyRequest().authenticated()                 // exige autenticação no resto
                );

        return http.build();
    }
}
