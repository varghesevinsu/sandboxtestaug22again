package com.valeo.sslnextgen.model;

import com.eva.base.annotations.Table;
import com.valeo.sslnextgen.base.model.ApplicationUserBase;

@Table(name="ApplicationUser", keys={"sid"})
public class ApplicationUser extends ApplicationUserBase {

}