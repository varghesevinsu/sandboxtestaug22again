export interface ApplicationUserBase {
	createdDate: Date;
	viewer: Boolean;
	userRoles: string;
	sid: string;
	email: string;
	modifiedDate: Date;
	createdBy: string;
	lastName: string;
	modifiedBy: string;
	admin: Boolean;
	firstName: string;
	leader: Boolean;
	scheduler: Boolean;
}