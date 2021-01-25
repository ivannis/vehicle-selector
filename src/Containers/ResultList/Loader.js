import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        height={54}
        width={1200}
        viewBox="0 0 1200 54"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="25" cy="25" r="24" />
        <rect x="60" y="5" rx="3" ry="3" width="700" height="13" />
        <rect x="60" y="30" rx="3" ry="3" width="200" height="10" />
        <circle cx="1180" cy="27" r="8" />
        <rect x="219" y="146" rx="0" ry="0" width="0" height="0" />
    </ContentLoader>
)

export default Loader

