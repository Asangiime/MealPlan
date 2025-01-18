package com.example.mealsdelivery.Config;

import com.example.mealsdelivery.Service.AdminService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final AdminService adminService;

    public SecurityConfig(AdminService adminService) {
        this.adminService = adminService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()  // Correct way to disable CSRF
                .authorizeHttpRequests()
                .requestMatchers("/admin/**").hasRole("ADMIN")  // Protect admin routes
                .anyRequest().permitAll()  // Allow all other requests
                .userDetailsService(adminService)  // Use adminService as UserDetailsService
                .httpBasic();  // Basic Authentication

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(adminService)  // Use adminService as UserDetailsService
                .passwordEncoder(passwordEncoder())  // Reference the passwordEncoder() method
                .build();
    }
}
