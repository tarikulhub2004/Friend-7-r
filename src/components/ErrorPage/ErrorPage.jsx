
const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold text-red-500">
                    404
                </h1>
                <p className="text-4xl font-semibold mt-3">
                    Page Not Found!
                </p>
                <a href="/" className="btn rounded-2xl bg-blue-500 border text-white border-gray-300 mt-5">
                    Go Home
                </a>
            </div>

        </div>
    );
};

export default ErrorPage;