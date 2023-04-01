package com.axis.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class TemplateDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int templateDetailsId;
	
	
	private String fieldName;
	
	
	private int fieldOrder;
	
	
	private boolean isMandatory;
	
	
	private boolean isConditionalMandatory;
	
	
	private boolean isNonMandatory;
	
	@ManyToOne
    @JoinColumn(name ="templateId")
    private TemplateHeader templateHeader;

	public TemplateDetails() {
		super();
	}

	public TemplateDetails(int templateDetailsId, String fieldName, int fieldOrder, boolean is_mandatory,
			boolean is_conditional_mandatory, boolean is_non_mandatory, TemplateHeader templateHeader) {
		super();
		this.templateDetailsId = templateDetailsId;
		this.fieldName = fieldName;
		this.fieldOrder = fieldOrder;
		this.isMandatory = is_mandatory;
		this.isConditionalMandatory = is_conditional_mandatory;
		this.isNonMandatory = is_non_mandatory;
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
		return isMandatory;
	}

	public void setIs_mandatory(boolean is_mandatory) {
		this.isMandatory = is_mandatory;
	}

	public boolean isIs_conditional_mandatory() {
		return isConditionalMandatory;
	}

	public void setIs_conditional_mandatory(boolean is_conditional_mandatory) {
		this.isConditionalMandatory = is_conditional_mandatory;
	}

	public boolean isIs_non_mandatory() {
		return isNonMandatory;
	}

	public void setIs_non_mandatory(boolean is_non_mandatory) {
		this.isNonMandatory = is_non_mandatory;
	}

	public TemplateHeader getTemplateHeader() {
		return templateHeader;
	}

	public void setTemplateHeader(TemplateHeader templateHeader) {
		this.templateHeader = templateHeader;
	}
	
	
	
}
