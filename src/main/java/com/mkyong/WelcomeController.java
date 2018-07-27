package com.mkyong;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/*@RestController
@EnableAutoConfiguration*/

@Controller
public class WelcomeController {

	// inject via application.properties
	@Value("${welcome.message:test}")
	private String message = "Hello World";

	@RequestMapping("/")
	public String welcome(Map<String, Object> model) {
		model.put("message", this.message);
		return "welcome";
	}
	
	@RequestMapping("/home.html")
	public String home(Map<String, Object> model) {
		//model.put("message", this.message);
		return "home";
	}
	
	@RequestMapping(value ="/createAccount", method=RequestMethod.GET,
			produces = "application/json")
	 public @ResponseBody Person  getPerson() {		
		Person person = new Person();
		person.setFirstName("Java");
		person.setLastName("Honk");
		return person;
	}
	
	@RequestMapping(value ="/createCustomerAccount", method=RequestMethod.POST,
			consumes = "application/json")
	 public @ResponseBody CreateAccountRequest  createAccount(@RequestBody CreateAccountRequest createAccountRequest) {	
		
		System.out.println("createAccountRequest " + createAccountRequest.getAccountName());
		System.out.println("createAccountRequest " + createAccountRequest.getAccountType());
		
		return createAccountRequest;
	}
}