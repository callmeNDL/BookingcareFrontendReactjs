export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manager-user', 
        menus: [
            {
                name: 'menu.admin.crud',link: '/system/user-doctor'  
            },
            {
                name: 'menu.admin.crud-redux',link: '/system/user-redux' 
            },
            {
                name: 'menu.admin.manager-doctor', link: '/system/user-doctor' 
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                   
                // ]
            },
            {
                name: 'menu.admin.manager-admin',link: '/system/user-admin' 
            },
            
           
        ]
    },
    { //hệ thống
        name: 'menu.admin.clinic', 
        menus: [
            {
                name: 'menu.admin.manager-clinic',link: '/system/manager-clinic'  
            },
            
           
        ]
    },
    { //hệ thống
        name: 'menu.admin.specialty', 
        menus: [
            {
                name: 'menu.admin.manager-specialty',link: '/system/manager-specialty'  
            },
            
           
        ]
    },
    { //hệ thống
        name: 'menu.admin.handbook', 
        menus: [
            {
                name: 'menu.admin.manager-handbook',link: '/system/manager-handbook'  
            },
            
           
        ]
    },
    
];