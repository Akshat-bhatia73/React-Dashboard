import BarChartIcon from '@mui/icons-material/BarChart';
import GradientIcon from '@mui/icons-material/Gradient';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import PieChartIcon from '@mui/icons-material/PieChart';
import RadarIcon from '@mui/icons-material/Radar';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import StoreIcon from "@mui/icons-material/Store";

export const sidebarData = [
    {
        title: 'MAIN',
        links: [
            {
                name: 'Home',
                icon: <HomeIcon />,
                to: '/'
            }
        ]
    },

    {
        title: 'LIST',
        links: [
            {
                name: 'Users',
                icon: <PeopleIcon />,
                to: '/users'
            },
            {
                name: 'Products',
                icon: <StoreIcon />,
                to: '/products'
            },
            {
                name: 'Deliveries',
                icon: <LocalShippingIcon />,
                to: '/deliveries'
            },
        ]
    },

    {
        title: 'CHARTS',
        links: [
            {
                name: 'Line Chart',
                icon: <ShowChartIcon />,
                to: '/charts/line-chart'
            },
            {
                name: 'Bar Chart',
                icon: <BarChartIcon />,
                to: '/charts/bar-chart'
            },
            {
                name: 'Area Chart',
                icon: <GradientIcon />,
                to: '/charts/area-chart'

            },
            {
                name: 'Pie Chart',
                icon: <PieChartIcon />,
                to: '/charts/pie-chart'

            },
            {
                name: 'Scatter Chart',
                icon: <ScatterPlotIcon />,
                to: '/charts/scatter-chart'

            },
            {
                name: 'Radar Chart',
                icon: <RadarIcon />,
                to: '/charts/radar-chart'
            },
        ]
    },

]