import MakeTestpaper from '@/views/test/MakeTestpaper'
import TestpaperManage from '@/views/test/TestpaperManage'
import TestResult from '@/views/test/TestResult'
import TestSetter from '@/views/test/TestSetter'
import ViewTestpaper from '@/views/test/ViewTestpaper'

export default[
    {
        name:"MakeTestpaper",
        path:"MakeTestpaper",
        components: {
            right:MakeTestpaper
        }
    },
    {
        name:"TestpaperManage",
        path:"TestpaperManage",
        components: {
            right:TestpaperManage
        }
    },
    {
        name:"TestResult",
        path:"TestResult",
        components: {
            right:TestResult
        }
    },
    {
        name:"TestSetter",
        path:"TestSetter",
        components: {
            right:TestSetter
        }
    },
    {
        name:"ViewTestpaper",
        path:"ViewTestpaper",
        components: {
            right:ViewTestpaper
        }
    }
]

