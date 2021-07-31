package com.example.demo;

import java.util.Arrays;
import java.util.Collections;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@SpringBootApplication
public class FileServerApplication extends  SpringBootServletInitializer{
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(FileServerApplication.class);
	}
	

	public static void main(String[] args) {
		SpringApplication.run(FileServerApplication.class, args);
	}
	

	//  Spring’s @CrossOrigin doesn’t play well with Spring Security. 
	// @Bean
	// public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
	// 	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	// 	CorsConfiguration config = new CorsConfiguration();
	// 	config.setAllowCredentials(true);
	// 	config.setAllowedOrigins(Arrays.asList(
	// 	"http://ec2-52-15-43-215.us-east-2.compute.amazonaws.com:8080",//from dashboard
	// 	"http://ec2-3-137-195-79.us-east-2.compute.amazonaws.com:8080",
	// 	"http://localhost:3000",
	// 	"http://localhost:3001",
	// 	"http://localhost:8081"
	// 	));
	// 	config.setAllowedMethods(Collections.singletonList("*"));
	// 	config.setAllowedHeaders(Collections.singletonList("*"));
	// 	source.registerCorsConfiguration("/**", config);
	// 	FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter());
	// 	bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
	// 	return bean;
	// }

}
