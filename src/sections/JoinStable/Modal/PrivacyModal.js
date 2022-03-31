import React from 'react'
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"

import { Modal } from "react-bootstrap"

import "../../../pages/join-stable.scss"

const PrivacyModal = ({ showPrivacyModal, setShowPrivacyModal}) => {
    return (
        <Modal
            show={showPrivacyModal}
            onHide={() => setShowPrivacyModal(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    <img src={StableLogo} width={150} alt="stable logo" />
                </Modal.Title>
                Privacy Policy
            </Modal.Header>
            <div className="wrapper-policy">
                <h1 className="heading">
                    STABLE INSURANCE, INC.
                    <br />
                    PRIVACY POLICY
                </h1>
                <p className="paragraph-5">
                    <strong className="bold-text">
                        Last Updated: August 30, 2018
                    </strong>
                </p>
                <p className="paragraph-4">
                    This privacy policy (“<strong>Policy</strong>”) describes how
                    Stable Insurance, Inc. and its related companies (“
                    <strong>Company</strong>
                    ”) collect, use and share personal information of consumer users
                    of this website, www.stableins.com (the “<strong>Site</strong>
                    ”). This Policy also applies to any of our other websites that
                    post this Policy. This Policy does not apply to websites that
                    post different statements.
                </p>
                <h3 className="policy__title">
                    <strong>WHAT WE COLLECT</strong>
                    <br />
                </h3>
                <p>
                    We get information about you in a range of ways.
                    <br />
                </p>
                <p>
                    <strong>Information You Give Us.</strong> We collect your‎ name,
                    postal address, email address, phone number, username,
                    demographic information (such as your gender and occupation) as
                    well as other information you directly give us on our Site.
                </p>
                <p>
                    <strong>Information We Get From Others.</strong> We may get
                    information about you from other sources. We may add this to
                    information we get from this Site.
                    <br />
                </p>
                <p>
                    <strong>Information Automatically Collected.</strong> We
                    automatically log information about you and your computer. For
                    example, when visiting our Site, we log your computer operating
                    system type, browser type, browser language, the website you
                    visited before browsing to our Site, pages you viewed, how long
                    you spent on a page, access times and information about your use
                    of and actions on our Site.
                    <br />
                </p>
                <p>
                    <strong>Cookies.</strong> We may log information using
                    &quot;cookies.&quot; Cookies are small data files stored on your
                    hard drive by a website. We may use both session Cookies (which
                    expire once you close your web browser) and persistent Cookies
                    (which stay on your computer until you delete them) to provide
                    you with a more personal and interactive experience on our Site.
                    This type of information is collected to make the Site more
                    useful to you and to tailor the experience with us to meet your
                    special interests and needs.
                    <br />
                </p>
                <h3 className="policy__title">
                    <strong>USE OF PERSONAL INFORMATION</strong>
                    <br />
                </h3>
                <p>
                    We use your personal information as follows:
                    <br />
                </p>
                <ul>
                    <li>
                        We use your personal information to operate, maintain, and
                        improve our sites, products, and services.
                    </li>
                    <li>
                        We use your personal information to process and deliver
                        contest entries and rewards.
                    </li>
                    <li>
                        We use your personal information to respond to comments and
                        questions and provide customer service.
                    </li>
                    <li>
                        We use your personal information to send information including
                        confirmations, invoices, technical notices, updates, security
                        alerts, and support and administrative messages.
                    </li>
                    <li>
                        We use your personal information to communicate about
                        promotions, upcoming events, and other news about products and
                        services offered by us and our selected partners.
                    </li>
                    <li>
                        We use your personal information to link or combine user
                        information with other personal information.
                    </li>
                    <li>
                        We use your personal information to protect, investigate, and
                        deter against fraudulent, unauthorized, or illegal activity.
                    </li>
                    <li>
                        We use your personal information to provide and deliver
                        products and services customers request.
                    </li>
                </ul>
                <h3 className="policy__title">
                    <strong>SHARING OF PERSONAL INFORMATION</strong>
                    <br />
                </h3>
                <p>
                    We may share personal information as follows:
                    <br />
                </p>
                <ul>
                    <li>
                        We may share personal information with your consent. For
                        example, you may let us share personal information with others
                        for their own marketing uses. Those uses will be subject to
                        their privacy policies.
                    </li>
                    <li>
                        We may share personal information when we do a business deal,
                        or negotiate a business deal, involving the sale or transfer
                        of all or a part of our business or assets. These deals can
                        include any merger, financing, acquisition, or bankruptcy
                        transaction or proceeding.
                    </li>
                    <li>
                        We may share personal information for legal, protection, and
                        safety purposes.
                    </li>
                    <li className="sub-list">
                        <ul>
                            <li>We may share information to comply with laws.</li>
                            <li>
                                We may share information to respond to lawful requests and
                                legal processes.
                            </li>
                            <li>
                                We may share information to protect the rights and
                                property of Stable Insurance, Inc., our agents, customers,
                                and others. This includes enforcing our agreements,
                                policies, and terms of use.
                            </li>
                            <li>
                                We may share information in an emergency. This includes
                                protecting the safety of our employees and agents, our
                                customers, or any person.
                            </li>
                        </ul>
                    </li>
                    <li>
                        We may share information with those who need it to do work for
                        us.
                    </li>
                </ul>
                <p>
                    We may also share aggregated and/or anonymized data with others
                    for their own uses.
                    <br />
                </p>
                <h3 className="policy__title">
                    <strong>INFORMATION CHOICES AND CHANGES</strong>
                    <br />
                </h3>
                <p>
                    Our marketing emails tell you how to “opt-out.” If you opt out,
                    we may still send you non-marketing emails. Non-marketing emails
                    include emails about your accounts and our business dealings
                    with you.
                    <br />
                </p>
                <p>
                    You may send requests about personal information to our Contact
                    Information below. You can request to change contact choices,
                    opt-out of our sharing with others, and update your personal
                    information.
                    <br />
                </p>
                <p>
                    You can typically remove and reject cookies from our Site with
                    your browser settings. Many browsers are set to accept cookies
                    until you change your settings. If you remove or reject our
                    cookies, it could affect how our Site works for you.
                    <br />
                </p>
                <h3 className="policy__title">CONTACT INFORMATION</h3>
                <p className="paragraph-3">
                    We welcome your comments or questions about this privacy policy.
                    You may also contact us at our address:
                </p>
                <p>
                    Stable Insurance, Inc. <br />
                    Email: hello@stableins.com
                </p>
                <h3 className="policy__title">
                    <strong className="bold-text-2">
                        CHANGES TO THIS PRIVACY POLICY
                    </strong>
                </h3>
                <p className="paragraph-2">
                    We may change this privacy policy. If we make any changes, we
                    will change the Last Updated date above.
                </p>
            </div>
        </Modal>
    )
}

export default PrivacyModal;