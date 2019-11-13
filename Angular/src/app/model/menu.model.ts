export class Menu {

    public static menu: Array<any> = [
        {
            oe: [
                // { path: 'oedash', title: 'Dashboard', icon: 'dashboard', class: '' },
                { path: 'masterdash', title: 'Master', icon: 'dashboard', class: '' 
                ,submenu:[
                    { path: 'dealerdash', title: 'Dealer',class: '' },
                    { path: 'subdealerdash', title: 'SubDealer',class: '' }

                ]
                },
                ],
            re: [
                { path: 'redash', title: 'Dashboard', icon: 'dashboard', class: '' },
                { path: 'reloanprocess', title: 'RELoanProcess', icon: 'dashboard', class: '' },

            ]
        }

    ]
}