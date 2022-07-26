package com.valeo.sslnextgen.logic;

import com.valeo.sslnextgen.base.model.ManPowerBase;
import com.valeo.sslnextgen.model.ManPower;
import com.valeo.sslnextgen.base.logic.IManPowerBLBase;


public interface IManPowerBL<T extends ManPowerBase> extends IManPowerBLBase<T> {

	ManPower getByAll(String service, String site, String currency);

}
