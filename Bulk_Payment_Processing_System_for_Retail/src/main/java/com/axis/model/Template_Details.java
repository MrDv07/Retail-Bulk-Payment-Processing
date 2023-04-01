package com.axis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Template_Details {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int templateDetailsId;
	
	@Column(name = " Field Name")
	private String fieldName;
	
	@Column( name = " Field Order")
	private int fieldOrder;
	
	@Column( name = " Mandatory")
	private boolean is_mandatory;
	
	@Column( name = " Conditional Mandatory")
	private boolean is_conditional_mandatory;
	
	@Column( name = " Non-Mandatory")
	private boolean is_non_mandatory;
	
	@ManyToOne
    @JoinColumn(name = "template_id")
    private Template_Header templateHeader;

	public Template_Details() {
		super();
	}

	public Template_Details(int templateDetailsId, String fieldName, int fieldOrder, boolean is_mandatory,
			boolean is_conditional_mandatory, boolean is_non_mandatory, Template_Header templateHeader) {
		super();
		this.templateDetailsId = templateDetailsId;
		this.fieldName = fieldName;
		this.fieldOrder = fieldOrder;
		this.is_mandatory = is_mandatory;
		this.is_conditional_mandatory = is_conditional_mandatory;
		this.is_non_mandatory = is_non_mandatory;
		this.templateHeader = templateHeader;
	}

	public int getTemplateDetailsId() {
		return templateDetailsId;
	}

	public void setTemplateDetailsId(int templateDetailsId) {
		this.templateDetailsId = templateDetailsId;
	}

	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public int getFieldOrder() {
		return fieldOrder;
	}

	public void setFieldOrder(int fieldOrder) {
		this.fieldOrder = fieldOrder;
	}

	public boolean isIs_mandatory() {
		return is_mandatory;
	}

	public void setIs_mandatory(boolean is_mandatory) {
		this.is_mandatory = is_mandatory;
	}

	public boolean isIs_conditional_mandatory() {
		return is_conditional_mandatory;
	}

	public void setIs_conditional_mandatory(boolean is_conditional_mandatory) {
		this.is_conditional_mandatory = is_conditional_mandatory;
	}

	public boolean isIs_non_mandatory() {
		return is_non_mandatory;
	}

	public void setIs_non_mandatory(boolean is_non_mandatory) {
		this.is_non_mandatory = is_non_mandatory;
	}

	public Template_Header getTemplateHeader() {
		return templateHeader;
	}

	public void setTemplateHeader(Template_Header templateHeader) {
		this.templateHeader = templateHeader;
	}
	
	
	
}
