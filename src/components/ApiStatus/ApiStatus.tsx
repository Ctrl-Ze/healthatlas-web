import type React from "react";
import { useEffect, useState } from "react";

interface ApiStatusData {
    status: string;
    checks: string;
}

const ApiStatus: React.FC = () => {
    const [data, setData] = useState<ApiStatusData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:8080/q/health')
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        })
        .then((json) => {
            setData(json);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="api-status">Loading...</div>;
    if (error) return <div className="api-status error">Error: {error}</div>

    return (
        <div className="api-status">
            <p>Status: {data?.status}</p>
            <p>Checks: {data?.checks}</p>
        </div>
    );
};

export default ApiStatus;