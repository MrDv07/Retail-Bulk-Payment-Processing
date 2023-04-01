package com.axis.model;


import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="id" )
    private TemplateHeader templateHeader;

	public TemplateDetails() {
		super();
	}

	public TemplateDetails(int templateDetailsId, String fieldName, int fieldOrder, boolean isMandatory,
			boolean isConditionalMandatory, boolean isNonMandatory, TemplateHeader templateHeader) {
		super();
		this.templateDetailsId = templateDetailsId;
		this.fieldName = fieldName;
		this.fieldOrder = fieldOrder;
		this.isMandatory = isMandatory;
		this.isConditionalMandatory = isConditionalMandatory;
		this.isNonMandatory = isNonMandatory;
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

	public boolean isMandatory() {
		return isMandatory;
	}

	public void setMandatory(boolean isMandatory) {
		this.isMandatory = isMandatory;
	}

	public boolean isConditionalMandatory() {
		return isConditionalMandatory;
	}

	public void setConditionalMandatory(boolean isConditionalMandatory) {
		this.isConditionalMandatory = isConditionalMandatory;
	}

	public boolean isNonMandatory() {
		return isNonMandatory;
	}

	public void setNonMandatory(boolean isNonMandatory) {
		this.isNonMandatory = isNonMandatory;
	}

	public TemplateHeader getTemplateHeader() {
		return templateHeader;
	}

	public void setTemplateHeader(TemplateHeader templateHeader) {
		this.templateHeader = templateHeader;
	}
	
}
