package com.axis.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Template_Header {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int template_id;
	
	@Column(name = "Template Name")
	private String templateName;
	
	@Column(name = " Creation Date")
	private LocalDate creationDate;
	
	@OneToMany(mappedBy = "templateHeader", targetEntity=Template_Details.class)
	private List<Template_Details> templateDetails;

	public Template_Header() {
		super();
	}

	public Template_Header(int template_id, String templateName, LocalDate creationDate,
			List<Template_Details> templateDetails) {
		super();
		this.template_id = template_id;
		this.templateName = templateName;
		this.creationDate = creationDate;
		this.templateDetails = templateDetails;
	}

	public int getTemplate_id() {
		return template_id;
	}

	public void setTemplate_id(int template_id) {
		this.template_id = template_id;
	}

	public String getTemplateName() {
		return templateName;
	}

	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	public LocalDate getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(LocalDate localDate) {
		this.creationDate = localDate;
	}

	public List<Template_Details> getTemplateDetails() {
		return templateDetails;
	}

	public void setTemplateDetails(List<Template_Details> templateDetails) {
		this.templateDetails = templateDetails;
	}
	

}
