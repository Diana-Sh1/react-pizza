import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="125" cy="122" r="117" />
        <rect x="21" y="259" rx="11" ry="11" width="215" height="19" />
        <rect x="7" y="293" rx="17" ry="17" width="247" height="78" />
        <rect x="12" y="388" rx="13" ry="13" width="75" height="24" />
        <rect x="136" y="387" rx="22" ry="22" width="123" height="36" />
    </ContentLoader>
)

export default Skeleton