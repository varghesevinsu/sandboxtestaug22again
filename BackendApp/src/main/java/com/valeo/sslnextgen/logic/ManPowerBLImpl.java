package com.valeo.sslnextgen.logic;

import java.util.ArrayList;
import java.util.List;

import com.eva.base.acl.IPerimeterManager;
import com.eva.base.dal.Filter;
import com.eva.base.dal.Filter.Operator;
import com.eva.base.dal.SimpleFilter;
import com.valeo.sslnextgen.base.logic.ManPowerBLBaseImpl;
import com.valeo.sslnextgen.model.ManPower;
import com.valeo.sslnextgen.logic.ManPowerPerimeterImpl;


public class ManPowerBLImpl extends ManPowerBLBaseImpl<ManPower> implements IManPowerBL<ManPower>{

	public ManPowerBLImpl() {
		super(ManPower.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<ManPower> getPerimeterManager() {
		return null;
	}

	@Override
	public ManPower getByAll(String service,String site,String currency) {
		List<Filter> filters = new ArrayList<>();
		filters.add(new SimpleFilter("service", service));
		filters.add(new SimpleFilter("site", site));
		filters.add(new SimpleFilter("currency", currency));
		List<ManPower> getAllList= super.getAll(filters);
		if(getAllList!=null && getAllList.size()>0)
		{
			return getAllList.get(0);
		}
		else
		{
			return null;
		}
	}
}