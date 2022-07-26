package com.valeo.sslnextgen.logic;

import com.eva.base.acl.IPerimeterManager;
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

	public ManPower getByAll(String service,String site,String currency) {
		List<Filter> filters = new ArrayList<>();
		filters.add(new SimpleFilter("service", service, Operator.EQUAL));
		filters.add(new SimpleFilter("site", site, Operator.EQUAL));
		filters.add(new SimpleFilter("currency", currency, Operator.EQUAL));
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