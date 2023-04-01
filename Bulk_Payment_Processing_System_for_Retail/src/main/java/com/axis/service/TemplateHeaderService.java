package com.axis.service;

import java.util.List;

import com.axis.model.TemplateDetails;
import com.axis.model.TemplateHeader;

public interface TemplateHeaderService {
	
	    void saveTemplateHeader(TemplateHeader templateHeader , List<TemplateDetails> templateDetails);
	    TemplateHeader getTemplateHeaderById(int id);
	    List<TemplateHeader> getAllTemplateHeaders();
	    void deleteTemplateHeader(int id);
	


}
