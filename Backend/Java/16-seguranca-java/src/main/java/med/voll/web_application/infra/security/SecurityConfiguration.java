package med.voll.web_application.infra.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

	@Bean
	public SecurityFilterChain securityFilters(HttpSecurity http) throws Exception {
		return http.authorizeHttpRequests(req -> {
				req.requestMatchers("/css/**", "/js/**", "/assets/**").permitAll();
				req.anyRequest().authenticated();
			})
			.formLogin(f -> f.loginPage("/login")
				.defaultSuccessUrl("/").permitAll())
			.logout(logout -> logout.logoutSuccessUrl("/login?logout").permitAll())
			.rememberMe(r -> r.key("lembrarDeMim").alwaysRemember(true))
			.build();
	}

	@Bean
	public PasswordEncoder codificadorDeSenha() {
		return new BCryptPasswordEncoder();
	}
}
