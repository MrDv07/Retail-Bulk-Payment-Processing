package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.TemplateHeader;


@Repository
public interface TemplateHeaderRepository extends JpaRepository<TemplateHeader, Integer> {

}
