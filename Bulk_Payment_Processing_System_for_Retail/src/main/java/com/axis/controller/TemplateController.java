package com.axis.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.axis.model.Template_Details;
import com.axis.model.Template_Header;
import com.axis.service.TemplateHeaderService;

@RestController
@RequestMapping("/template")
public class TemplateController {
	
	
	@Autowired
	private TemplateHeaderService headerService;
	
	@PostMapping("/createtemplate")
	public ResponseEntity<String> saveTemplate(@RequestBody Template_Header templateHeader, ArrayList<Template_Details> templateDetails) {
		headerService.saveTemplateHeader(templateHeader, templateDetails);
		return new ResponseEntity<>("Template saved successfully", HttpStatus.OK);
	}
	

}
