package com.valeo.sslnextgen.logic;

import com.valeo.sslnextgen.exception.ErrorMessages;

import com.valeo.sslnextgen.exception.ErrorCodes;

import com.valeo.sslnextgen.logic.LoginAuthenticator;

import com.eva.base.user.menu.MenuRoleUtil;

import com.eva.base.cache.MenuCache;

import com.eva.base.cache.CacheManager;
import com.eva.base.logger.Logger;
import com.eva.base.logger.LoggerFactory;
import com.eva.base.authentication.Authenticator;
import com.eva.base.cache.CacheManager;

import com.eva.base.exception.ForbiddenException;
import com.eva.base.appconfiguration.AppConfigurationCache;
import com.eva.base.authentication.logic.AppUserPrivilegeCache;
// import com.eva.base.user.menu.ApplicationMenuLoader;

import com.valeo.sslnextgen.model.ApplicationUser;
import com.valeo.sslnextgen.base.logic.ApplicationUserBLBaseImpl;
import com.valeo.sslnextgen.logic.IApplicationUserBL;
import com.eva.base.dal.providers.SearchOptions;

public class ApplicationUserBLImpl extends ApplicationUserBLBaseImpl<ApplicationUser> 
implements IApplicationUserBL<ApplicationUser>
{
	private static final Logger LOGGER = LoggerFactory.getLogger(ApplicationUserBLImpl.class);

	public ApplicationUserBLImpl() {
		super(ApplicationUser.class);
		setChangelogBL(new ChangelogBLImpl());
		addPersistenceOption(SearchOptions.SEARCH_INDEX_NAME, getTableName());
	}

	public ApplicationUser getCurrentUserWithMenu() {
		ApplicationUser user = getCurrentUser();
		if (null == user) {
			LOGGER.error(ErrorMessages.USER_NOT_AUTHENTICATED);
			throw new ForbiddenException(ErrorCodes.USER_NOT_AUTHENTICATED, ErrorMessages.USER_NOT_AUTHENTICATED);
		}
		/* TODO Menu handling
		CacheManager cacheManager = CacheManager.getInstance();
		AppConfigurationCache configCache = cacheManager.getCache(AppConfigurationCache.NAME);
		ApplicationMenuLoader menuLoader = new ApplicationMenuLoader(configCache);
		LOGGER.debug("Loading menu for the user {}", user.getEmail());
		menuLoader.loadMenu(user);*/
		user.setMenuRole(getMenuBasedOnUser());
		return user;
	}

	public ApplicationUser getCurrentUser() {
		return getCurrentUser(false);
	}

	public ApplicationUser getCurrentUser(boolean isUserId) {
		CacheManager cacheManager = CacheManager.getInstance();
		AppUserPrivilegeCache<ApplicationUser> cache = cacheManager.getCache(AppUserPrivilegeCache.NAME);
		// Google login
		Authenticator<ApplicationUser> authenticator = new LoginAuthenticator(cache, this);
		ApplicationUser user = authenticator.authenticate(isUserId);
		if (null == user) {
			LOGGER.info("User is not available");
			return user;
		}
		LOGGER.info("User {} sucessfully authenticated", user.getEmail());
		return user;
	}
	
	
	
	public String getMenuBasedOnUser() {
		MenuCache menuCache = CacheManager.getInstance().getCache(MenuCache.NAME);
		ApplicationUser userPrivilege = getCurrentUser();
		return MenuRoleUtil.menuBasedonRoles(userPrivilege.getUserRoles(), menuCache.query("Menu"));
	}
}
