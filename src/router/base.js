import ClassManage from '@/views/base/ClassManage'
import ModifyPassword from '@/views/base/ModifyPassword'
import StudentManage from '@/views/base/StudentManage'
import TeacherManage from '@/views/base/TeacherManage'

export default[
    {
        name:"ClassManage",
        path:"ClassManage",
        components: {
            right:ClassManage
        }
    },
    {
        name:"ModifyPassword",
        path:"ModifyPassword",
        components: {
            right:ModifyPassword
        }
    },
    {
        name:"StudentManage",
        path:"StudentManage",
        components: {
            right:StudentManage
        }
    },
    {
        name:"TeacherManage",
        path:"TeacherManage",
        components: {
            right:TeacherManage
        }
    }
]

