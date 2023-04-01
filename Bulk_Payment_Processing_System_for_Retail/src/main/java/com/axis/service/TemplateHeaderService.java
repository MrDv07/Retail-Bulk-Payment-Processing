package com.axis.service;

import java.util.List;

import com.axis.model.Template_Details;
import com.axis.model.Template_Header;

public interface TemplateHeaderService {
	
	    void saveTemplateHeader(Template_Header templateHeader , List<Template_Details> templateDetails);
	    Template_Header getTemplateHeaderById(int id);
	    List<Template_Header> getAllTemplateHeaders();
	    void deleteTemplateHeader(int id);
	


}
