package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
import com.valeo.sslnextgen.base.logic.ProjectTypeBLBaseImpl;
import com.valeo.sslnextgen.model.ProjectType;
import com.valeo.sslnextgen.logic.ProjectTypePerimeterImpl;


public class ProjectTypeBLImpl extends ProjectTypeBLBaseImpl<ProjectType> implements IProjectTypeBL<ProjectType>{

	public ProjectTypeBLImpl() {
		super(ProjectType.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<ProjectType> getPerimeterManager() {
		return new ProjectTypePerimeterImpl();
	}
}