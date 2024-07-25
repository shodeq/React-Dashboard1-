import Badge from "../../components/elements/dashboard/Badge"
import TablesLayout from "../../components/fragments/dashboard/TablesLayout"


export default function Dashboard() {
    return(<>
<h3 className="text-3xl font-medium text-gray-700">Dashboard</h3>

<div className="mt-4">
    <div className="flex flex-wrap -mx-6">
        <Badge>
            <Badge.Icon className={"bg-indigo-600"} />
            <Badge.Description value="8,282" title={"New Users"}/>
        </Badge>
        <Badge>
            <Badge.Icon className={"bg-orange-600"}/>
            <Badge.Description value={"200,251"} title={"Total Orders"}/>
        </Badge>

        <Badge>
            <Badge.Icon className={"bg-pink-600"}/>
            <Badge.Description value={"215,542"} title={"Aviable Products"}/>
        </Badge>
    </div>
</div>

<div className="mt-8">

</div>

<TablesLayout>
<table className="min-w-full">
                <thead>
                    <tr>
                        <th
                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Name</th>
                        <th
                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Title</th>
                        <th
                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Status</th>
                        <th
                            className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Role</th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                    </tr>
                </thead>

                <tbody className="bg-white">
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img className="w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>

                                <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                        John Doe
                                    </div>
                                    <div className="text-sm leading-5 text-gray-500">
                                        john@example.com</div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 text-gray-900">Software Engineer</div>
                            <div className="text-sm leading-5 text-gray-500">Web dev</div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
                        </td>

                        <td
                            className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            Owner</td>

                        <td
                            className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
</TablesLayout>
</>
    )
}
