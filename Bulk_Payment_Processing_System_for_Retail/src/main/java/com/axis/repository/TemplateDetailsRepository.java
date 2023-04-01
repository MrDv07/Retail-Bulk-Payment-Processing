package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.Template_Details;


@Repository
public interface TemplateDetailsRepository extends JpaRepository<Template_Details, Integer> {

}
