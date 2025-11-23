"use client"


import { useRouter } from "next/navigation"
import Loading from "./ui/Loading"
import { useDocuments } from "@/app/hooks/useDocuments"
import UploadDocument from "./UploadDocument"
import { Clock, Eye, FileText } from "lucide-react"

const DashboardList = () => {
    const route = useRouter();
    const { data: documents, isLoading, isError } = useDocuments();

    const handleViewDocument = (id: string) => {
        route.push(`documents/${id}`);
    };
    return (
        <>
            <UploadDocument />
            <div className="mt-6 flex-1 px-4">
                {isError && <p className="text-lg text-red-500">error loading page</p>}
                {isLoading && <Loading />}
                <div className="mt-4 rounded-2xl  py-2 ">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Recent Activity</h2>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>Last 30 days</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1  gap-6">
                        {documents && documents.map((doc, idx) => (
                            <div key={idx} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-xl">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300">
                                                {"Uncategorized"}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 line-clamp-1 text-white">{doc.fileName}</h3>
                                        <p className="text-slate-400 text-sm line-clamp-2 mb-4">{doc.summary}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <FileText className="w-4 h-4" />
                                            <span>{doc.wordCount.toLocaleString()} words</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{new Date(doc.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        <Eye className="w-4 h-4" />
                                        View
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className=" overflow-y-auto max-h-[50vh]">
                    {documents && documents?.length > 0 ? (documents?.map((doc, idx) => {
                        return (
                            <div className="grid grid-cols-5 h-32 py-4 text-center font-semibold hover:bg-slate-300 transition-colors duration-200 place-content-center items-center" key={doc._id || idx}>
                                <p>{doc.fileName}</p>
                                <p>{new Date(doc.createdAt).toLocaleDateString()}</p>
                                <p className="text-center">{doc.wordCount}</p>
                                <p>{doc?.summary
                                    ? doc.summary.split(" ").slice(0, 20).join(" ") + (doc.summary.split(" ").length > 30 ? "..." : "")
                                    : "No summary yet"}</p>
                                <div className="">
                                    <button className=" text-white px-6 py-2 bg-[#1F2937] rounded-lg" onClick={() => handleViewDocument(doc._id)} >View</button>
                                </div>
                            </div>
                        )
                    })) : (<p className="text-center text-gray-600 py-8">
                        You have not uploaded any documents yet !!
                    </p>)}
                </div> */}
                </div>
            </div>
        </>

    )
}

export default DashboardList
