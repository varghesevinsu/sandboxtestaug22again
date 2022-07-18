export interface ApplicationUserBase {
	createdDate: Date;
	viewer: Boolean;
	userRoles: string;
	sid: string;
	email: string;
	modifiedDate: Date;
	createdBy: string;
	requester: Boolean;
	approver: Boolean;
	lastName: string;
	modifiedBy: string;
	admin: Boolean;
	firstName: string;
	dummyTest: string;
}