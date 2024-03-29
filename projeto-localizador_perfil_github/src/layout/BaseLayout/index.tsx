import Box from "@mui/material/Box";
import React from "react";
import {CabecalhoHeader} from "../../components/CabecalhoHeader";

type BaseLayoutProps = {
    children: React.ReactNode;
    appBarTitle: string;
};
export function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <>
            <CabecalhoHeader/>

            
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                padding={0}
                mt={0}
                sx={{
                    bgcolor: "palette.background.default",
                    width: "100%",
                }}
                minHeight={100}
            >

                {children}
            </Box>

        </>
    );
}