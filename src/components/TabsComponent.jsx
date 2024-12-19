import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTab = styled(Tab)(({ theme }) => ({
	color: '#ff3b9d',
	minHeight: '48px',
	textTransform: 'none',
	fontSize: '16px',
	fontWeight: 400,
	padding: '12px 40px',
	border: '1px solid rgba(248, 0, 192, 0.5)',
	borderRadius: '8px 10px 0px 0px',
	'&.Mui-selected': {
		color: 'white',
		fontWeight: 600,
		background: 'linear-gradient(0, #F800C0 0%, #FE8A70 100%)',
		height: '54px',
		border: 'none',
		boxShadow: '0 0 20px rgba(248, 0, 192, 0.5)',
	},
	'&:not(:last-child)': {
		marginRight: '4px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '14px',
		padding: '8px 10px',
		minHeight: '40px',
		borderRadius: '6px 8px 0px 0px',
		'&.Mui-selected': {
			height: '46px',
		},
	},
}));

const CustomTabs = styled(Tabs)(({ theme }) => ({
	minHeight: '48px',
	'& .MuiTabs-indicator': {
		display: 'none',
	},
	'& .MuiTabs-flexContainer': {
		gap: '4px',
	},
	[theme.breakpoints.down('sm')]: {
		minHeight: '40px',
		'& .MuiTabs-flexContainer': {
			gap: '2px',
		},
	},
}));


const TabsComponent = ({ tabs, activeTab, onTabChange, children }) => {
	return (
		<Box className="flex pt-8 justify-center">
			<Box
				className="w-full max-w-4xl mx-10"
				sx={{
					'.MuiTab-root': {
						opacity: 1,
					}
				}}
			>
				<CustomTabs
					value={activeTab}
					onChange={onTabChange}
				>
					{tabs.map((tab, index) => (
						<CustomTab key={index} label={tab.label} />
					))}
				</CustomTabs>

				<Box
					className="rounded-2xl overflow-hidden border border-[#F800C0] border-opacity-50"
					sx={{
						position: 'relative',
						borderRadius: '0px 0px 10px 10px',
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

export default TabsComponent;