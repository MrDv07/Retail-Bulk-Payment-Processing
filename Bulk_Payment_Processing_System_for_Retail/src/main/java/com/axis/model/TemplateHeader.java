package com.axis.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class TemplateHeader {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int templateId;
	
	@Column(name = "TemplateName")
	private String templateName;
	
	@Column(name = "CreationDate")
	private LocalDate creationDate;
	
	@OneToMany(mappedBy = "templateHeader", targetEntity=TemplateDetails.class, cascade = CascadeType.ALL)
	private List<TemplateDetails> templateDetails;

	public TemplateHeader() {
		super();
	}

	public TemplateHeader(int template_id, String templateName, LocalDate creationDate,
			List<TemplateDetails> templateDetails) {
		super();
		this.templateId = template_id;
		this.templateName = templateName;
		this.creationDate = creationDate;
		this.templateDetails = templateDetails;
	}

	public int getTemplate_id() {
		return templateId;
	}

	public void setTemplate_id(int template_id) {
		this.templateId = template_id;
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

	public List<TemplateDetails> getTemplateDetails() {
		return templateDetails;
	}

	public void setTemplateDetails(List<TemplateDetails> templateDetails) {
		this.templateDetails = templateDetails;
	}
	

}
