import React from 'react';
import style from "../Styles/Navbar.module.css"
import { Link as RouterLink } from "react-router-dom";
function Navbar() {
    return (
        <div className={style.navbar}>
            {/* Left-aligned Search Bar */}
            <div className={style["search-bar"]}>
                <input type="text" className={style["search-input"]} placeholder="Search 8000+ tutorials" />
            </div>

            {/* Centered FreeCodeCamp Heading */}
            <RouterLink to="/">
            <div className={style.logo}>
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABRCAMAAACg7xknAAAAllBMVEUKCiIKCiMAAAD///8AAB0AAB8AABoAABQAABEAABYAAA0AABgGBiEAAA8AAAfh4eODgont7e/R0dTn5+mhoaX29vdbW2VXV1lkZGZxcXTKys2Xl5nb2960tLeOjpNbW2HBwcMmJi9PT1c5OT6pqaxEREl6eoE6OkQtLTsdHSktLTITEh8xMTtqanCAgIETEiQkJDNERFAaylF3AAAE80lEQVRoge2Ya5uiNhSAyQkhEG5CDCJyE0UHFZn5/3+uJzDbzmz32W3rzLbbJ+8Xk3CEvMlJiFrWfwXyGP929//AiBiRT8KIGJFPwogYkU/ifyNiMBgMBoPBYDAYDAaD4e9iA0TsR0GMfSOERPbbavDNoD/Dxbv/EoT3MX8t+E/rqh7s78e4l8PFdb5ujurbm55zD4PEj1WibCX0J1ueyVdN+BEm7JbEaxlH34txDgWltLh9ZUtAZd7vtbApKVXt9UcmvKH3ED/t7ubqujfS/LtP/4u4IwXYJ71tBYEVLF0NbDt4W4CkEABtAvr59hJDbJstIksQG+gRYCpTIBZznPl7eIUE80VCmL0Y2i49gZ4B965e5mGArfp6iP4BNqxicNy9wzzfA6cXaANT33uYxyTy+n6CwG9o7+G0qLPNo0PXRziSDhz6vRYJwMLoiPC7xPzkPQUSTZtND8ya7KEH3lkeOwMcOryTXlZtC/OT4UhjoXUJVCk8mlzsuZQqLWsIhqKMT2WcAvMx06Qc3SBaxXEsdy7fyj0Op72dMH2wKc65f0sTKddJxmGNMfIeil3McRCmkytWUsoktf1NWybrVsoOilUay2SHA8Au9DavtQAUpVuui05P9w9PibO5y8PmiWHKdrHK96qDo2qm252eo5Fun4cRM2ERsTgbkuPNue2o4Gm86buKZlCrcdivaAO7UvcqcO1O3SfWJGvY0FNHKyiOkKrtHm+Ze5Y4qWX0ocZlt54nJ+BpLR4VscJcwpz2ThiPIE5nKHNA2rXuAXIvv4hYfh67TmBD0h2STtgOxBmUow46Vq8ieJ+80C3rFkUA4hzWFZQdMAbtDjCNlszyz5RKFJnvC231+HL3UWQeooDHI8dRF5hfiKpwdeuClF9EGIp4mD6ubFDEweRGkXSOTtpXEcIIv+7SdF3MItGrSONh9CzSVlokECmlL8mqmG+Mdh8ugu+n8rjSnKEtTrqQvYrYN57H/tci5XEOekERXALEujlTKuvVMam+LXKcZ8TdUrq7SkV3uvYJM4KlEFNLCAGhzi5dAD6qg03YUJ4xtQISiEWEkNfU0kFC1PLKCLtIyJMJBNTvZqRzySKCGwg+jkBBJRwSSuf9Kkp3j6+RLyIMcNwAi5BWOsd3LaxLXRjTiGMyA2wpPhpD4ECfh6TGQo+LHXdTpC6wopvqBHK1BwjTtyJp5eA1eXct+0xxFyZQ0ns0aJEIXzv7pPE/QCTRIrgPx1QlJVjOOVFFQZOORyVNC6Xuws0SWiZqi+NMZanXqNjSuEqlysJhicZ9+K5UqWTnRxVtW9XStV7sMtfJlJa0LGhxxbzkso5Q5KgYc57z8oipBSf68HtEH1GyebeZMk2HI+MPWb1qBs9i3mZVNxeXWO6lG7GAy+Owrbd9aBH3cqrHIXtiOrpu9twi4tKMHRYCr1+dDtC/7E+Cj0/OywuU2eFUN1e9OYZ3tXcsp5Og38YVHtbsSbs9Dns9Lvke4iwtkfD1bhL4IuJsTjyfzy3EdiNXHzoIc/ESt+foaLmGQc68nToitPEsw/AwyLGjjigzEUb+fOzBrCqwUYxnZrEzbgIBFGkUfIDITyAsR/57hV2l3oHns/szNkfHZHr8qPVTIHx3ftNV+/q2htMS/SIe2uT9D7D3Hf9lNAwGg8FgMBgMBoPBYDAYDAaDwWAwGH4mvwFuG2bxogV8HwAAAABJRU5ErkJggg==" alt="" srcset="" />
            </div>
            </RouterLink>

            {/* Right-aligned Sign-in Button */}
            <div className={style.signin}>
            <button className={style["signin-btn"]}>Menu</button>
            <RouterLink to="/signup">
                <button className={style["signin-button"]}>Sign In</button>
                </RouterLink>
            </div>
        </div>
    );
}

export default Navbar;
