"use client";
import { useMask, format } from "@react-input/mask";

export default function W9Form() {
    const ssn = useMask({
        mask: "___-__-___",
        replacement: { _: /\d/ },
    });
    const ein = useMask({
        mask: "__-_______",
        replacement: { _: /\d/ },
    });

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
                Create W9 Form
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
                Enter your personal information below. None of your information
                is saved.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                    <label
                        htmlFor="first-name"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        <span className="font-bold">1.</span> Name of
                        entity/indvidual:
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
                    <div className="mt-1 text-xs/5 px-3 text-gray-600">
                        (For a sole proprietor or disregarded entity, enter the
                        owner’s name on line 1, and enter the
                        business/disregarded entity’s name on line 2.)
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        <span className="font-bold">2.</span> Business
                        name/disregarded entity name, if different from above:
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
                    <label
                        htmlFor="country"
                        className="block text-sm/6 font-medium text-gray-900"
                    >
                        <span className="font-bold">3a.</span> Check the
                        appropriate box for federal tax classification of the
                        entity/individual whose name is listed in the first
                        field.
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
            </div>
            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-sm/6 font-medium text-gray-950">
                        <span className="font-bold">3b.</span> Foreign
                        partners/owners checkbox:
                    </legend>
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
                                <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-950"
                                >
                                    If on line 3a you selected “Partnership” or
                                    “Trust/estate,” or checked “LLC” and entered
                                    “P” as its tax classification, and you are
                                    providing this form to a partnership, trust,
                                    or estate in which you have an ownership
                                    interest, check this box if you have any
                                    foreign partners, owners, or beneficiaries.
                                </label>
                                {/* <p id="comments-description" className="text-gray-500">
                           
                            </p> */}
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="mt-8 text-sm/6 font-medium text-gray-950">
                <span className="font-bold">4.</span> Exemptions (codes apply
                only to certain entities, not individuals):
            </div>
            <div className="mt-5 sm:col-span-6">
                <label
                    htmlFor="last-name"
                    className="indent-1 block text-sm/6 font-medium text-gray-950"
                >
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
                <label
                    htmlFor="last-name"
                    className="indent-1 block text-sm/6 font-medium text-gray-950"
                >
                    Exemption from Foreign Account Tax Compliance Act (FATCA)
                    reporting code (if any):
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
                <div className="mt-1 text-xs/5 px-3 text-gray-600">
                    (Applies to accounts maintained outside the United States)
                </div>
            </div>
            <div className="mt-4 sm:col-span-6">
                <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-950"
                >
                    <span className="font-bold"> 5.</span> Address (number,
                    street, and apt. or suite no.):
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
                <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-950"
                >
                    <span className="font-bold"> 6.</span> City, state, and ZIP
                    code:
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
                <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-950"
                >
                    <span className="font-bold">7.</span> List account number(s)
                    here (optional):
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
            <h2 className="text-base/7 mt-10 font-semibold text-gray-900">
                Part I - Taxpayer Identification Number (TIN)
            </h2>
            <p className="mt-1 text-sm/6 leading-5 text-gray-600">
                Enter your TIN in the appropriate box. The TIN provided must
                match the name given on line 1 to avoid backup withholding. For
                individuals, this is generally your social security number
                (SSN). However, for a resident alien, sole proprietor, or
                disregarded entity, see the instructions for Part I, later. For
                other entities, it is your employer identification number (EIN).
                If you do not have a number, see How to get a TIN, later.{" "}
            </p>{" "}
            <p className="mt-2 text-sm/6 leading-5 text-gray-600">
                <span>Note:</span> If the account is in more than one name, see
                the instructions for line 1. See also What Name and Number To
                Give the Requester for guidelines on whose number to enter.
            </p>
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="mt-4 sm:col-span-2">
                    <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-950"
                    >
                        Social security number
                    </label>
                    <div className="mt-2">
                        <input
                            ref={ssn}
                            placeholder="___-__-___"
                            id="last-name"
                            name="last-name"
                            type="text"
                                                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="mt-4 text-center font-bold pt-0.5 sm:col-span-2">
                 OR
                </div>
                <div className="mt-4 sm:col-span-2">
                    <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-950"
                    >
                        Employer identification number
                    </label>
                    <div className="mt-2">
                        <input
                            ref={ein}
                            placeholder="__-_______"
                            id="last-name"
                            name="last-name"
                            type="text"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>
            <h2 className="text-base/7 mt-10 font-semibold text-gray-900">
                Part II - Certification
            </h2>
            <p className="mt-1 text-sm/6 leading-5 text-gray-600">
                Under penalties of perjury, I certify that:
            </p>{" "}
            <p className="mt-1 text-sm/6 leading-5 text-gray-600">
                1. The number shown on this form is my correct taxpayer
                identification number (or I am waiting for a number to be issued
                to me); and
            </p>
            <p className="mt-1 text-sm/6 leading-5 text-gray-600">
                2. I am not subject to backup withholding because (a) I am
                exempt from backup withholding, or (b) I have not been notified
                by the Internal Revenue Service (IRS) that I am subject to
                backup withholding as a result of a failure to report all
                interest or dividends, or (c) the IRS has notified me that I am
                no longer subject to backup withholding; and
            </p>
            <p className="mt-1 text-sm/6 leading-5 text-gray-600">
                3. I am a U.S. citizen or other U.S. person (defined below); and
            </p>
            <p className="mt-1 text-sm/6 leading-5 text-gray-600">
                4. The FATCA code(s) entered on this form (if any) indicating
                that I am exempt from FATCA reporting is correct.
            </p>{" "}
            <p className="mt-2 text-sm/6 leading-5 text-gray-600">
                <span className="font-bold">Certification instructions.</span>{" "}
                You must cross out item 2 above if you have been notified by the
                IRS that you are currently subject to backup withholding because
                you have failed to report all interest and dividends on your tax
                return. For real estate transactions, item 2 does not apply. For
                mortgage interest paid, acquisition or abandonment of secured
                property, cancellation of debt, contributions to an individual
                retirement arrangement (IRA), and, generally, payments other
                than interest and dividends, you are not required to sign the
                certification, but you must provide your correct TIN.
            </p>{" "}
            <p className="mt-2 text-sm/6 leading-5 text-gray-600"></p>
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="mt-4 sm:col-span-4">
                    <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-950"
                    >
                        Full name
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
                <div className="mt-4 sm:col-span-2">
                    <label
                        htmlFor="last-name"
                        className="block text-sm/6 font-medium text-gray-950"
                    >
                        Date
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
            </div>
            <button
                type="button"
                className="rounded-md mt-10 mx-auto block bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                Create Completed W9 Form
            </button>
        </div>
    );
}
