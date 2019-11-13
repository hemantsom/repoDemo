
export class DealerMaster {
    dealerId: number;
    dealerName: string;
    dealerContactNo: string;
    dealerAddress: string;
    // //@OneToOne
    // @Column(name = "b_id")   // has a relation one to one foreign key from branch
    // private BranchMaster dealerBranchId;
    dealerAccountNo: string;
    dealerEmail: string;
    dealerStatus: string;
    dealerIFSCCode: string;
    dealerAccountType: string;
    dealerBankName: string;
}