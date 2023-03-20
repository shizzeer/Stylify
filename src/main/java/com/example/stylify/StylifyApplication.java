package com.example.stylify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class StylifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(StylifyApplication.class, args);
	}

}
