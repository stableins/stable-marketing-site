import React from "react";
import { ArgyleLink } from "./ArgyleLink";

export default function App() {
  return (
    <div>
      <ArgyleLink
        style={{
          padding: "10px 10px",
          borderRadius: 10,
          fontSize: 15,
          fontWeight: "bold",
          backgroundColor: "#ffae13",
          color: "black",
          border: "none",
          cursor: "pointer",
          width: '70%',
          marginTop: '20px'
        }}
        open={true}
        options={{
          pluginKey: "017aac27-2893-ab5b-bc83-c27a83233bae",
          linkItems: ["uber", "lyft"],
          apiHost: "https://api-sandbox.argyle.io/v1",
          showCategories: false,
          showSearch: false,
          // onUserCreated: async (params) => {
          //   await Driver.updateDriverInfo(driverInfo.driverId, {
          //     argyleUserId: params.userId,
          //   });
          //   setLinkAccountNextDisabled(false);
          // },
        }}
      >
        Link Account(s)
      </ArgyleLink>{" "}
    </div>
  );
}
