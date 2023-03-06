import { Stack } from "@mui/material";
import AsideSection from "./AsideSection";

function Aside() {
    return (
        <Stack direction="column" spacing={3}>
            <AsideSection title="Popular Books" moreLink="#" />
            <AsideSection title="New Arrivals" moreLink="#" />
        </Stack>
    );
}

export default Aside;
