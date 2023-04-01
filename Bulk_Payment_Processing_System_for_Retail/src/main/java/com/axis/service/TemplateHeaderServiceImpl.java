package com.axis.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.TemplateDetails;
import com.axis.model.TemplateHeader;
import com.axis.repository.TemplateDetailsRepository;
import com.axis.repository.TemplateHeaderRepository;


@Service
public class TemplateHeaderServiceImpl implements TemplateHeaderService {

	@Autowired
	private TemplateHeaderRepository headerRepository;
	
	
	@Autowired
	private TemplateDetailsRepository detailsRepository;
	
	@Override
	public void saveTemplateHeader(TemplateHeader templateHeader, List<TemplateDetails> templateDetails) {
		
		templateHeader.setCreationDate(LocalDate.now());
			
		for (TemplateDetails templateDetails1 : templateDetails) {
            templateDetails1.setTemplateHeader(templateHeader);
            detailsRepository.save(templateDetails1);
        }
		
		headerRepository.save(templateHeader);
		
	}

	
	
	@Override
	public TemplateHeader getTemplateHeaderById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<TemplateHeader> getAllTemplateHeaders() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteTemplateHeader(int id) {
		// TODO Auto-generated method stub
		
	}

	

}
