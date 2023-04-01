package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.Template_Header;


@Repository
public interface TemplateHeaderRepository extends JpaRepository<Template_Header, Integer> {

}
