

export default function W9Form() {
    return (<div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base/7 font-semibold text-gray-900">Create W9 Form</h2>
        <p className="mt-1 text-sm/6 text-gray-600">Enter your personal information below. None of your information is saved.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    <span className="font-bold">1.</span> Name of entity/indvidual:
                </label>
                <div className="mt-2">
                    <input
                        id="taxpayer-name"
                        name="taxpayer-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="sm:col-span-6">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                    <span className="font-bold">2.</span> Business name/disregarded entity name, if different from above:
                </label>
                <div className="mt-2">
                    <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>


            <div className="sm:col-span-4">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                    <span className="font-bold">3a.</span> Check the appropriate box for federal tax classification of the entity/individual whose name is listed in the first field.
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                        <option>Individual/sole proprietor</option>
                        <option>C corporation</option>
                        <option>S corporation</option>
                        <option>Partnership</option>
                        <option>Trust/estate</option>
                        <option>LLC</option>
                        <option>Other</option>
                    </select>

                </div>
            </div>

            {/* <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>


            <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                    Street address
                </label>
                <div className="mt-2">
                    <input
                        id="street-address"
                        name="street-address"
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                    City
                </label>
                <div className="mt-2">
                    <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                    State / Province
                </label>
                <div className="mt-2">
                    <input
                        id="region"
                        name="region"
                        type="text"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                    ZIP / Postal code
                </label>
                <div className="mt-2">
                    <input
                        id="postal-code"
                        name="postal-code"
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
           */}

        </div>
        <div className="mt-10 space-y-10">
            <fieldset>
                <legend className="text-sm/6 font-medium text-gray-950"><span className="font-bold">3b.</span> Foreign partners/owners checkbox</legend>
                <div className="mt-6 space-y-6">
                    <div className="flex gap-3">
                        <div className="flex h-6 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                                <input

                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    aria-describedby="comments-description"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                    <path
                                        d="M3 8L6 11L11 3.5"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                        d="M3 7H11"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm/6">
                            <label htmlFor="comments" className="font-medium text-gray-950">
                                If on line 3a you selected “Partnership” or “Trust/estate,” or checked “LLC” and entered “P” as its tax classification,
                                and you are providing this form to a partnership, trust, or estate in which you have an ownership interest, check
                                this box if you have any foreign partners, owners, or beneficiaries.
                            </label>
                            {/* <p id="comments-description" className="text-gray-500">
                           
                            </p> */}
                        </div>
                    </div>


                </div>
            </fieldset>
        </div>

        <div className="mt-8 text-sm/6 font-medium text-gray-950">
            <span className="font-bold">4.</span> Exemptions (codes apply only to certain entities, not individuals):
        </div>
        <div className="mt-5 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-950">
                Exempt payee code (if any):
            </label>
            <div className="mt-2">
                <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
        <div className="mt-4 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-950">
                Exemption from Foreign Account Tax Compliance Act (FATCA) reporting code (if any):
            </label>
            <div className="mt-2">
                <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
            <div className="mt-1 text-sm/6 text-gray-600">(Applies to accounts maintained outside the United States)</div>
        </div>

    </div>)
}