package br.com.neosigaa;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.options.AriaRole;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Paths;
import java.util.regex.Pattern;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

@SpringBootApplication
public class NeosigaaApplication {

	public static void main(String[] args) {
		SpringApplication.run(NeosigaaApplication.class, args);
		//simbora playwright
	}

}
