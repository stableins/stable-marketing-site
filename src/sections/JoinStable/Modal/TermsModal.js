import React from 'react'
import StableLogo from "../../../assets/image/logo/Stable-logo_site.png"

import { Modal } from "react-bootstrap"

import "../../../pages/join-stable.scss"

const TermsModal = ({ onShowTermsModal, onSetShowTermsModal }) => {
    return (
        <Modal
            show={onShowTermsModal}
            onHide={() => onSetShowTermsModal(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    <img src={StableLogo} width={150} alt="stable logo" />
                </Modal.Title>
                Terms
            </Modal.Header>
            <div className="terms-wrapper">
                <h1 className="heading">
                    <strong>
                        WEBSITE TERMS OF USE
                        <br />
                        VERSION 1.0
                    </strong>
                    <br />
                </h1>
                <p className="paragraph-6">
                    <strong>Last revised on: August 30, 2018</strong>
                    <br />
                </p>
                <p className="paragraph-7">
                    The website located at www.stableins.com (the “
                    <strong>Site</strong>
                    ”) is a copyrighted work belonging to Stable Insurance, Inc. (“
                    <strong>Company</strong>”, “<strong>us</strong>”, “
                    <strong>our</strong>
                    ”, and “<strong>we</strong>”).  Certain features of the Site may
                    be subject to additional guidelines, terms, or rules, which will
                    be posted on the Site in connection with such features.  All
                    such additional terms, guidelines, and rules are incorporated by
                    reference into these Terms.
                    <br />
                </p>
                <p className="paragraph-8">
                    THESE TERMS OF USE (THESE “<strong>TERMS</strong>”) SET FORTH
                    THE LEGALLY BINDING TERMS AND CONDITIONS THAT GOVERN YOUR USE OF
                    THE SITE. BY ACCESSING OR USING THE SITE, YOU ARE ACCEPTING
                    THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU
                    REPRESENT), AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE
                    RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS (ON
                    BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT). YOU MAY
                    NOT ACCESS OR USE THE SITE OR ACCEPT THE TERMS IF YOU ARE NOT AT
                    LEAST 18 YEARS OLD.  IF YOU DO NOT AGREE WITH ALL OF THE
                    PROVISIONS OF THESE TERMS, DO NOT ACCESS AND/OR USE THE SITE.
                </p>
                <p>
                    THESE TERMS REQUIRE THE USE OF ARBITRATION (SECTION 10.2) ON AN
                    INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR
                    className ACTIONS, AND ALSO LIMIT THE REMEDIES AVAILABLE TO YOU
                    IN THE EVENT OF A DISPUTE.
                </p>
                <div>
                    <h2 className="terms-of-use-title">1. ACCOUNTS</h2>
                    <ul className="list-no-style">
                        <li className="list-item">
                            1.1     <strong>Account Creation. </strong>In order to use
                            certain features of the Site, you must register for an
                            account (“
                            <strong>Account</strong>”) and provide certain information
                            about yourself as prompted by the account registration form.
                            You represent and warrant that: (a) all required
                            registration information you submit is truthful and
                            accurate; (b) you will maintain the accuracy of such
                            information. You may delete your Account at any time, for
                            any reason, by following the instructions on the Site.
                            Company may suspend or terminate your Account in accordance
                            with Section 8.
                        </li>
                        <li>
                            1.2     <strong>Account Responsibilities.</strong> You are
                            responsible for maintaining the confidentiality of your
                            Account login information and are fully responsible for all
                            activities that occur under your Account. You agree to
                            immediately notify Company of any unauthorized use, or
                            suspected unauthorized use of your Account or any other
                            breach of security.  Company cannot and will not be liable
                            for any loss or damage arising from your failure to comply
                            with the above requirements.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">2. ACCESS TO THE SITE</h2>
                    <ul className="list-no-style">
                        <li className="list-item">
                            2.1     <strong>License. </strong>Subject to these Terms,
                            Company grants you a non-transferable, non-exclusive,
                            revocable, limited license to use and access the Site solely
                            for your own personal, noncommercial use.
                        </li>
                        <li className="list-item">
                            2.2     <strong>Certain Restrictions. </strong>The rights
                            granted to you in these Terms are subject to the following
                            restrictions: (a) you shall not license, sell, rent, lease,
                            transfer, assign, distribute, host, or otherwise
                            commercially exploit the Site, whether in whole or in part,
                            or any content displayed on the Site; (b) you shall not
                            modify, make derivative works of, disassemble, reverse
                            compile or reverse engineer any part of the Site; (c) you
                            shall not access the Site in order to build a similar or
                            competitive website, product, or service; and (d) except as
                            expressly stated herein, no part of the Site may be copied,
                            reproduced, distributed, republished, downloaded, displayed,
                            posted or transmitted in any form or by any means. Unless
                            otherwise indicated, any future release, update, or other
                            addition to functionality of the Site shall be subject to
                            these Terms.  All copyright and other proprietary notices on
                            the Site (or on any content displayed on the Site) must be
                            retained on all copies thereof.
                        </li>
                        <li className="list-item">
                            2.3     <strong>Modification. </strong>Company reserves the
                            right, at any time, to modify, suspend, or discontinue the
                            Site (in whole or in part) with or without notice to you.
                            You agree that Company will not be liable to you or to any
                            third party for any modification, suspension, or
                            discontinuation of the Site or any part thereof.
                        </li>
                        <li className="list-item">
                            2.4     <strong>No Support or Maintenance.</strong> You
                            acknowledge and agree that Company will have no obligation
                            to provide you with any support or maintenance in connection
                            with the Site.
                        </li>
                        <li className="list-item">
                            2.5     <strong>Ownership. </strong>Excluding any User
                            Content that you may provide (defined below), you
                            acknowledge that all the intellectual property rights,
                            including copyrights, patents, trade marks, and trade
                            secrets, in the Site and its content are owned by Company or
                            Company’s suppliers. Neither these Terms (nor your access to
                            the Site) transfers to you or any third party any rights,
                            title or interest in or to such intellectual property
                            rights, except for the limited access rights expressly set
                            forth in Section 2.1. Company and its suppliers reserve all
                            rights not granted in these Terms. There are no implied
                            licenses granted under these Terms.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">3. USER CONTENT</h2>
                    <ul>
                        <li className="list-no-style">
                            3.1     <strong>User Content. “User Content”</strong> means
                            any and all information and content that a user submits to,
                            or uses with, the Site (e.g., content in the user’s profile
                            or postings). You are solely responsible for your User
                            Content.  You assume all risks associated with use of your
                            User Content, including any reliance on its accuracy,
                            completeness or usefulness by others, or any disclosure of
                            your User Content that personally identifies you or any
                            third party. You hereby represent and warrant that your User
                            Content does not violate our Acceptable Use Policy (defined
                            in Section 3.3).  You may not represent or imply to others
                            that your User Content is in any way provided, sponsored or
                            endorsed by Company.  Because you alone are responsible for
                            your User Content, you may expose yourself to liability if,
                            for example, your User Content violates the Acceptable Use
                            Policy. Company is not obligated to backup any User Content,
                            and your User Content may be deleted at any time without
                            prior notice.  You are solely responsible for creating and
                            maintaining your own backup copies of your User Content if
                            you desire.
                        </li>
                        <li className="list-no-style">
                            3.2     <strong>License. </strong>You hereby grant (and you
                            represent and warrant that you have the right to grant) to
                            Company an irrevocable, nonexclusive, royalty-free and fully
                            paid, worldwide license to reproduce, distribute, publicly
                            display and perform, prepare derivative works of,
                            incorporate into other works, and otherwise use and exploit
                            your User Content, and to grant sublicenses of the foregoing
                            rights, solely for the purposes of including your User
                            Content in the Site. You hereby irrevocably waive (and agree
                            to cause to be waived) any claims and assertions of moral
                            rights or attribution with respect to your User Content.
                        </li>
                        <li className="list-no-style">
                            3.3     <strong>Acceptable Use Policy. </strong>The
                            following terms constitute our “
                            <strong>Acceptable Use Policy</strong>”:
                        </li>
                        <li className="list-no-style">
                            <ol className="list-2">
                                <li className="list-item">
                                    You agree not to use the Site to collect, upload,
                                    transmit, display, or distribute any User Content (i)
                                    that violates any third-party right, including any
                                    copyright, trademark, patent, trade secret, moral right,
                                    privacy right, right of publicity, or any other
                                    intellectual property or proprietary right; (ii) that is
                                    unlawful, harassing, abusive, tortious, threatening,
                                    harmful, invasive of another’s privacy, vulgar,
                                    defamatory, false, intentionally misleading, trade
                                    libelous, pornographic, obscene, patently offensive,
                                    promotes racism, bigotry, hatred, or physical harm of
                                    any kind against any group or individual or is otherwise
                                    objectionable; (iii) that is harmful to minors in any
                                    way; or (iv) that is in violation of any law,
                                    regulation, or obligations or restrictions imposed by
                                    any third party.
                                </li>
                                <li className="list-item">
                                    In addition, you agree not to: (i) upload, transmit, or
                                    distribute to or through the Site any computer viruses,
                                    worms, or any software intended to damage or alter a
                                    computer system or data; (ii) send through the Site
                                    unsolicited or unauthorized advertising, promotional
                                    materials, junk mail, spam, chain letters, pyramid
                                    schemes, or any other form of duplicative or unsolicited
                                    messages, whether commercial or otherwise; (iii) use the
                                    Site to harvest, collect, gather or assemble information
                                    or data regarding other users, including e-mail
                                    addresses, without their consent; (iv) interfere with,
                                    disrupt, or create an undue burden on servers or
                                    networks connected to the Site, or violate the
                                    regulations, policies or procedures of such networks;
                                    (v) attempt to gain unauthorized access to the Site (or
                                    to other computer systems or networks connected to or
                                    used together with the Site), whether through password
                                    mining or any other means; (vi) harass or interfere with
                                    any other user’s use and enjoyment of the Site; or (vi)
                                    use software or automated agents or scripts to produce
                                    multiple accounts on the Site, or to generate automated
                                    searches, requests, or queries to (or to strip, scrape,
                                    or mine data from) the Site (provided, however, that we
                                    conditionally grant to the operators of public search
                                    engines revocable permission to use spiders to copy
                                    materials from the Site for the sole purpose of and
                                    solely to the extent necessary for creating publicly
                                    available searchable indices of the materials, but not
                                    caches or archives of such materials, subject to the
                                    parameters set forth in our robots.txt file).
                                </li>
                            </ol>
                        </li>
                        <li className="list-no-style">
                            3.4     <strong>Enforcement. </strong>We reserve the right
                            (but have no obligation) to review any User Content, and to
                            investigate and/or take appropriate action against you in
                            our sole discretion if you violate the Acceptable Use Policy
                            or any other provision of these Terms or otherwise create
                            liability for us or any other person. Such action may
                            include removing or modifying your User Content, terminating
                            your Account in accordance with Section 8, and/or reporting
                            you to law enforcement authorities.
                        </li>
                        <li className="list-no-style">
                            3.5     <strong>Feedback. </strong>If you provide Company
                            with any feedback or suggestions regarding the Site
                            (“Feedback”), you hereby assign to Company all rights in
                            such Feedback and agree that Company shall have the right to
                            use and fully exploit such Feedback and related information
                            in any manner it deems appropriate. Company will treat any
                            Feedback you provide to Company as non-confidential and
                            non-proprietary.  You agree that you will not submit to
                            Company any information or ideas that you consider to be
                            confidential or proprietary.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">
                        4. <strong>INDEMNIFICATION</strong>
                    </h2>
                    <ul>
                        <li className="list-no-style">
                            You agree to indemnify and hold Company (and its officers,
                            employees, and agents) harmless, including costs and
                            attorneys’ fees, from any claim or demand made by any third
                            party due to or arising out of (a) your use of the Site, (b)
                            your violation of these Terms, (c) your violation of
                            applicable laws or regulations or (d) your User Content.
                            Company reserves the right, at your expense, to assume the
                            exclusive defense and control of any matter for which you
                            are required to indemnify us, and you agree to cooperate
                            with our defense of these claims.  You agree not to settle
                            any matter without the prior written consent of Company.
                            Company will use reasonable efforts to notify you of any
                            such claim, action or proceeding upon becoming aware of it.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">
                        5. THIRD-PARTY LINKS &amp; ADS; OTHER USERS
                    </h2>
                    <ul className="list-no-style">
                        <li className="list-item">
                            5.1     <strong>Third-Party Links &amp; Ads. </strong>The
                            Site may contain links to third-party websites and services,
                            and/or display advertisements for third parties
                            (collectively, “Third-Party Links &amp; Ads”). Such
                            Third-Party Links &amp; Ads are not under the control of
                            Company, and Company is not responsible for any Third-Party
                            Links &amp; Ads. Company provides access to these
                            Third-Party Links &amp; Ads only as a convenience to you,
                            and does not review, approve, monitor, endorse, warrant, or
                            make any representations with respect to Third-Party Links
                            &amp; Ads. You use all Third-Party Links &amp; Ads at your
                            own risk, and should apply a suitable level of caution and
                            discretion in doing so. When you click on any of the
                            Third-Party Links &amp; Ads, the applicable third party’s
                            terms and policies apply, including the third party’s
                            privacy and data gathering practices. You should make
                            whatever investigation you feel necessary or appropriate
                            before proceeding with any transaction in connection with
                            such Third-Party Links &amp; Ads.
                        </li>
                        <li className="list-item">
                            5.2     <strong>Other Users. </strong>Each Site user is
                            solely responsible for any and all of its own User Content.
                            Because we do not control User Content, you acknowledge and
                            agree that we are not responsible for any User Content,
                            whether provided by you or by others. We make no guarantees
                            regarding the accuracy, currency, suitability, or quality of
                            any User Content.  Your interactions with other Site users
                            are solely between you and such users. You agree that
                            Company will not be responsible for any loss or damage
                            incurred as the result of any such interactions.  If there
                            is a dispute between you and any Site user, we are under no
                            obligation to become involved.
                        </li>
                        <li className="list-item">
                            5.3     <strong>Release. </strong>You hereby release and
                            forever discharge the Company (and our officers, employees,
                            agents, successors, and assigns) from, and hereby waive and
                            relinquish, each and every past, present and future dispute,
                            claim, controversy, demand, right, obligation, liability,
                            action and cause of action of every kind and nature
                            (including personal injuries, death, and property damage),
                            that has arisen or arises directly or indirectly out of, or
                            that relates directly or indirectly to, the Site (including
                            any interactions with, or act or omission of, other Site
                            users or any Third-Party Links &amp; Ads).  IF YOU ARE A
                            CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE
                            SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES:
                            “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE
                            CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER
                            FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN
                            BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER
                            SETTLEMENT WITH THE DEBTOR.”
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">
                        6. <strong>DISCLAIMERS</strong>
                    </h2>
                    <ul className="list-no-style">
                        <li className="list-item">
                            THE SITE IS PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS,
                            AND COMPANY (AND OUR SUPPLIERS) EXPRESSLY DISCLAIM ANY AND
                            ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS,
                            IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR
                            CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                            PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR
                            NON-INFRINGEMENT. WE (AND OUR SUPPLIERS) MAKE NO WARRANTY
                            THAT THE SITE WILL MEET YOUR REQUIREMENTS, WILL BE AVAILABLE
                            ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR
                            WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL
                            CODE, COMPLETE, LEGAL, OR SAFE.  IF APPLICABLE LAW REQUIRES
                            ANY WARRANTIES WITH RESPECT TO THE SITE, ALL SUCH WARRANTIES
                            ARE LIMITED IN DURATION TO NINETY (90) DAYS FROM THE DATE OF
                            FIRST USE.
                        </li>
                        <li className="list-item">
                            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
                            WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
                            SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN
                            IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT
                            APPLY TO YOU.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">
                        7. <strong>LIMITATION ON LIABILITY</strong>
                    </h2>
                    <ul className="list-no-style">
                        <li className="list-item">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                            COMPANY (OR OUR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD
                            PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT
                            OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL,
                            EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING
                            FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY
                            TO USE, THE SITE, EVEN IF COMPANY HAS BEEN ADVISED OF THE
                            POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE
                            IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
                            RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR COMPUTER
                            SYSTEM, OR LOSS OF DATA RESULTING THEREFROM.
                        </li>
                        <li className="list-item">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOTWITHSTANDING
                            ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO
                            YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THIS
                            AGREEMENT (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
                            FORM OF THE ACTION), WILL AT ALL TIMES BE LIMITED TO A
                            MAXIMUM OF FIFTY US DOLLARS (U.S. $50). THE EXISTENCE OF
                            MORE THAN ONE CLAIM WILL NOT ENLARGE THIS LIMIT.  YOU AGREE
                            THAT OUR SUPPLIERS WILL HAVE NO LIABILITY OF ANY KIND
                            ARISING FROM OR RELATING TO THIS AGREEMENT.
                            <br />
                        </li>
                        <li className="list-item">
                            SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION
                            OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE
                            ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.{" "}
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">
                        8. <strong>TERM AND TERMINATION</strong>
                    </h2>
                    <ul className="list-no-style">
                        <li className="list-item">
                            Subject to this Section, these Terms will remain in full
                            force and effect while you use the Site. We may suspend or
                            terminate your rights to use the Site (including your
                            Account) at any time for any reason at our sole discretion,
                            including for any use of the Site in violation of these
                            Terms. Upon termination of your rights under these Terms,
                            your Account and right to access and use the Site will
                            terminate immediately.  You understand that any termination
                            of your Account may involve deletion of your User Content
                            associated with your Account from our live databases.
                            Company will not have any liability whatsoever to you for
                            any termination of your rights under these Terms, including
                            for termination of your Account or deletion of your User
                            Content.  Even after your rights under these Terms are
                            terminated, the following provisions of these Terms will
                            remain in effect: Sections 2.2 through 2.5, Section 3 and
                            Sections 4 through 10.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">
                        9. <strong>COPYRIGHT POLICY</strong>
                    </h2>
                    <ul>
                        <li className="list-no-style">
                            Company respects the intellectual property of others and
                            asks that users of our Site do the same.  In connection with
                            our Site, we have adopted and implemented a policy
                            respecting copyright law that provides for the removal of
                            any infringing materials and for the termination, in
                            appropriate circumstances, of users of our online Site who
                            are repeat infringers of intellectual property rights,
                            including copyrights.  If you believe that one of our users
                            is, through the use of our Site, unlawfully infringing the
                            copyright(s) in a work, and wish to have the allegedly
                            infringing material removed, the following information in
                            the form of a written notification (pursuant to 17 U.S.C. §
                            512(c)) must be provided to our designated Copyright Agent:
                            <br />
                        </li>
                        <li className="list-no-style">
                            <ol className="sub-list">
                                <li className="list-item">
                                    your physical or electronic signature;
                                </li>
                                <li className="list-item">
                                    identification of the copyrighted work(s) that you claim
                                    to have been infringed;
                                </li>
                                <li className="list-item">
                                    identification of the material on our services that you
                                    claim is infringing and that you request us to remove;
                                </li>
                                <li className="list-item">
                                    sufficient information to permit us to locate such
                                    material;
                                    <br />
                                </li>
                                <li className="list-item">
                                    your address, telephone number, and e-mail address;
                                </li>
                                <li className="list-item">
                                    a statement that you have a good faith belief that use
                                    of the objectionable material is not authorized by the
                                    copyright owner, its agent, or under the law; and
                                    <br />
                                </li>
                                <li className="list-item">
                                    a statement that the information in the notification is
                                    accurate, and under penalty of perjury, that you are
                                    either the owner of the copyright that has allegedly
                                    been infringed or that you are authorized to act on
                                    behalf of the copyright owner.
                                </li>
                            </ol>
                        </li>
                        <li className="list-no-style">
                            Please note that, pursuant to 17 U.S.C. § 512(f), any
                            misrepresentation of material fact (falsities) in a written
                            notification automatically subjects the complaining party to
                            liability for any damages, costs and attorney’s fees
                            incurred by us in connection with the written notification
                            and allegation of copyright infringement.
                            <br />
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="terms-of-use-title">10. GENERAL</h2>
                    <ul>
                        <li className="list-no-style">
                            10.1     <strong>Changes.</strong> These Terms are subject
                            to occasional revision, and if we make any substantial
                            changes, we may notify you by sending you an e-mail to the
                            last e-mail address you provided to us (if any), and/or by
                            prominently posting notice of the changes on our Site.  You
                            are responsible for providing us with your most current
                            e-mail address.  In the event that the last e-mail address
                            that you have provided us is not valid, or for any reason is
                            not capable of delivering to you the notice described above,
                            our dispatch of the e-mail containing such notice will
                            nonetheless constitute effective notice of the changes
                            described in the notice.  Any changes to these Terms will be
                            effective upon the earlier of thirty (30) calendar days
                            following our dispatch of an e-mail notice to you (if
                            applicable) or thirty (30) calendar days following our
                            posting of notice of the changes on our Site.  These changes
                            will be effective immediately for new users of our Site.
                            Continued use of our Site following notice of such changes
                            shall indicate your acknowledgement of such changes and
                            agreement to be bound by the terms and conditions of such
                            changes.
                            <br />
                        </li>
                        <li className="list-no-style">
                            10.2
                            <strong>
                                Dispute Resolution. Please read this Arbitration Agreement
                                carefully.  It is part of your contract with Company and
                                affects your rights.  It contains procedures for MANDATORY
                                BINDING ARBITRATION AND A className ACTION WAIVER.
                            </strong>
                            <br />
                        </li>
                        <li className="list-no-style">
                            <ol className="sub-list--letter">
                                <li className="list-item">
                                    <strong>
                                        <em>Applicability of Arbitration Agreement. </em>
                                    </strong>
                                    All claims and disputes (excluding claims for injunctive
                                    or other equitable relief as set forth below) in
                                    connection with the Terms or the use of any product or
                                    service provided by the Company that cannot be resolved
                                    informally or in small claims court shall be resolved by
                                    binding arbitration on an individual basis under the
                                    terms of this Arbitration Agreement.  Unless otherwise
                                    agreed to, all arbitration proceedings shall be held in
                                    English.  This Arbitration Agreement applies to you and
                                    the Company, and to any subsidiaries, affiliates,
                                    agents, employees, predecessors in interest, successors,
                                    and assigns, as well as all authorized or unauthorized
                                    users or beneficiaries of services or goods provided
                                    under the Terms.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>
                                            Notice Requirement and Informal Dispute Resolution
                                        </em>
                                        .{" "}
                                    </strong>
                                    Before either party may seek arbitration, the party must
                                    first send to the other party a written Notice of
                                    Dispute (“Notice”) describing the nature and basis of
                                    the claim or dispute, and the requested relief.  A
                                    Notice to the Company should be sent to: 81 Prospect
                                    Street, , Brooklyn, New York 11201.  After the Notice is
                                    received, you and the Company may attempt to resolve the
                                    claim or dispute informally.  If you and the Company do
                                    not resolve the claim or dispute within thirty (30) days
                                    after the Notice is received, either party may begin an
                                    arbitration proceeding.  The amount of any settlement
                                    offer made by any party may not be disclosed to the
                                    arbitrator until after the arbitrator has determined the
                                    amount of the award, if any, to which either party is
                                    entitled.
                                </li>
                                <li className="list-item">
                                    Arbitration Rules. Arbitration shall be initiated
                                    through the American Arbitration Association (
                                    <strong>“AAA”</strong>
                                    ), an established alternative dispute resolution
                                    provider (<strong>“ADR Provider”</strong>) that offers
                                    arbitration as set forth in this section. If AAA is not
                                    available to arbitrate, the parties shall agree to
                                    select an alternative ADR Provider. The rules of the ADR
                                    Provider shall govern all aspects of the arbitration,
                                    including but not limited to the method of initiating
                                    and/or demanding arbitration, except to the extent such
                                    rules are in conflict with the Terms. The AAA Consumer
                                    Arbitration Rules (<strong>“Arbitration Rules”</strong>)
                                    governing the arbitration are available online at{" "}
                                    <a href="http://www.adr.org">www.adr.org</a> or by
                                    calling the AAA at 1-800-778-7879. The arbitration shall
                                    be conducted by a single, neutral arbitrator. Any claims
                                    or disputes where the total amount of the award sought
                                    is less than Ten Thousand U.S. Dollars (US $10,000.00)
                                    may be resolved through binding non-appearance-based
                                    arbitration, at the option of the party seeking relief.
                                    For claims or disputes where the total amount of the
                                    award sought is Ten Thousand U.S. Dollars (US
                                    $10,000.00) or more, the right to a hearing will be
                                    determined by the Arbitration Rules.  Any hearing will
                                    be held in a location within 100 miles of your
                                    residence, unless you reside outside of the United
                                    States, and unless the parties agree otherwise. If you
                                    reside outside of the U.S., the arbitrator shall give
                                    the parties reasonable notice of the date, time and
                                    place of any oral hearings. Any judgment on the award
                                    rendered by the arbitrator may be entered in any court
                                    of competent jurisdiction.  If the arbitrator grants you
                                    an award that is greater than the last settlement offer
                                    that the Company made to you prior to the initiation of
                                    arbitration, the Company will pay you the greater of the
                                    award or $2,500.00. Each party shall bear its own costs
                                    (including attorney’s fees) and disbursements arising
                                    out of the arbitration and shall pay an equal share of
                                    the fees and costs of the ADR Provider.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>
                                            Additional Rules for Non-Appearance Based
                                            Arbitration
                                        </em>
                                        .{" "}
                                    </strong>
                                    If non-appearance based arbitration is elected, the
                                    arbitration shall be conducted by telephone, online
                                    and/or based solely on written submissions; the specific
                                    manner shall be chosen by the party initiating the
                                    arbitration.  The arbitration shall not involve any
                                    personal appearance by the parties or witnesses unless
                                    otherwise agreed by the parties.
                                    <br />
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Time Limits. </em>
                                    </strong>
                                    If you or the Company pursue arbitration, the
                                    arbitration action must be initiated and/or demanded
                                    within the statute of limitations (i.e., the legal
                                    deadline for filing a claim) and within any deadline
                                    imposed under the AAA Rules for the pertinent claim.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Authority of Arbitrator</em>.{" "}
                                    </strong>
                                    If arbitration is initiated, the arbitrator will decide
                                    the rights and liabilities, if any, of you and the
                                    Company, and the dispute will not be consolidated with
                                    any other matters or joined with any other cases or
                                    parties.  The arbitrator shall have the authority to
                                    grant motions dispositive of all or part of any claim.
                                    The arbitrator shall have the authority to award
                                    monetary damages, and to grant any non-monetary remedy
                                    or relief available to an individual under applicable
                                    law, the AAA Rules, and the Terms.  The arbitrator shall
                                    issue a written award and statement of decision
                                    describing the essential findings and conclusions on
                                    which the award is based, including the calculation of
                                    any damages awarded.  The arbitrator has the same
                                    authority to award relief on an individual basis that a
                                    judge in a court of law would have.  The award of the
                                    arbitrator is final and binding upon you and the
                                    Company.
                                    <br />
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Waiver of Jury Trial. </em>
                                    </strong>
                                    THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND
                                    STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN
                                    FRONT OF A JUDGE OR A JURY, instead electing that all
                                    claims and disputes shall be resolved by arbitration
                                    under this Arbitration Agreement.  Arbitration
                                    procedures are typically more limited, more efficient
                                    and less costly than rules applicable in a court and are
                                    subject to very limited review by a court.  In the event
                                    any litigation should arise between you and the Company
                                    in any state or federal court in a suit to vacate or
                                    enforce an arbitration award or otherwise, YOU AND THE
                                    COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead
                                    electing that the dispute be resolved by a judge.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>
                                            Waiver of className or Consolidated Actions. ALL
                                            CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS
                                            ARBITRATION AGREEMENT MUST BE ARBITRATED OR
                                            LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A
                                            className BASIS, AND CLAIMS OF MORE THAN ONE
                                            CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED
                                            JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER
                                            CUSTOMER OR USER.
                                        </em>
                                    </strong>
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Confidentiality</em>.{" "}
                                    </strong>
                                    All aspects of the arbitration proceeding, including but
                                    not limited to the award of the arbitrator and
                                    compliance therewith, shall be strictly confidential.
                                    The parties agree to maintain confidentiality unless
                                    otherwise required by law.  This paragraph shall not
                                    prevent a party from submitting to a court of law any
                                    information necessary to enforce this Agreement, to
                                    enforce an arbitration award, or to seek injunctive or
                                    equitable relief.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Severability</em>.
                                    </strong>{" "}
                                    If any part or parts of this Arbitration Agreement are
                                    found under the law to be invalid or unenforceable by a
                                    court of competent jurisdiction, then such specific part
                                    or parts shall be of no force and effect and shall be
                                    severed and the remainder of the Agreement shall
                                    continue in full force and effect.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Right to Waive. </em>
                                    </strong>
                                    Any or all of the rights and limitations set forth in
                                    this Arbitration Agreement may be waived by the party
                                    against whom the claim is asserted.  Such waiver shall
                                    not waive or affect any other portion of this
                                    Arbitration Agreement.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Survival of Agreement</em>.{" "}
                                    </strong>
                                    This Arbitration Agreement will survive the termination
                                    of your relationship with Company.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Small Claims Court. </em>
                                    </strong>
                                    Notwithstanding the foregoing, either you or the Company
                                    may bring an individual action in small claims court.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Emergency Equitable Relief</em>.{" "}
                                    </strong>
                                    Notwithstanding the foregoing, either party may seek
                                    emergency equitable relief before a state or federal
                                    court in order to maintain the status quo pending
                                    arbitration.  A request for interim measures shall not
                                    be deemed a waiver of any other rights or obligations
                                    under this Arbitration Agreement.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Claims Not Subject to Arbitration. </em>
                                    </strong>
                                    Notwithstanding the foregoing, claims of defamation,
                                    violation of the Computer Fraud and Abuse Act, and
                                    infringement or misappropriation of the other party’s
                                    patent, copyright, trademark or trade secrets shall not
                                    be subject to this Arbitration Agreement.
                                </li>
                                <li className="list-item">
                                    <strong>
                                        <em>Courts. </em>
                                    </strong>
                                    In any circumstances where the foregoing Arbitration
                                    Agreement permits the parties to litigate in court, the
                                    parties hereby agree to submit to the personal
                                    jurisdiction of the courts located within Kings County,
                                    New York, for such purpose
                                </li>
                            </ol>
                        </li>
                        <li className="list-no-style">
                            10.3     <strong>Export. </strong>The Site may be subject to
                            U.S. export control laws and may be subject to export or
                            import regulations in other countries. You agree not to
                            export, reexport, or transfer, directly or indirectly, any
                            U.S. technical data acquired from Company, or any products
                            utilizing such data, in violation of the United States
                            export laws or regulations.
                            <br />
                        </li>
                        <li className="list-no-style">
                            10.4     <strong>Disclosures.</strong> Company is located at
                            the address in Section 10.8. If you are a California
                            resident, you may report complaints to the Complaint
                            Assistance Unit of the Division of Consumer Product of the
                            California Department of Consumer Affairs by contacting them
                            in writing at 400 R Street, Sacramento, CA 95814, or by
                            telephone at (800) 952-5210.
                        </li>
                        <li className="list-no-style">
                            10.5     <strong>Electronic Communications.</strong> The
                            communications between you and Company use electronic means,
                            whether you use the Site or send us emails, or whether
                            Company posts notices on the Site or communicates with you
                            via email. For contractual purposes, you (a) consent to
                            receive communications from Company in an electronic form;
                            and (b) agree that all terms and conditions, agreements,
                            notices, disclosures, and other communications that Company
                            provides to you electronically satisfy any legal requirement
                            that such communications would satisfy if it were be in a
                            hardcopy writing. The foregoing does not affect your
                            non-waivable rights.
                        </li>
                        <li className="list-no-style">
                            10.6     <strong>Entire Terms.</strong> These Terms
                            constitute the entire agreement between you and us regarding
                            the use of the Site. Our failure to exercise or enforce any
                            right or provision of these Terms shall not operate as a
                            waiver of such right or provision. The section titles in
                            these Terms are for convenience only and have no legal or
                            contractual effect. The word “including” means “including
                            without limitation”.  If any provision of these Terms is,
                            for any reason, held to be invalid or unenforceable, the
                            other provisions of these Terms will be unimpaired and the
                            invalid or unenforceable provision will be deemed modified
                            so that it is valid and enforceable to the maximum extent
                            permitted by law.  Your relationship to Company is that of
                            an independent contractor, and neither party is an agent or
                            partner of the other.  These Terms, and your rights and
                            obligations herein, may not be assigned, subcontracted,
                            delegated, or otherwise transferred by you without Company’s
                            prior written consent, and any attempted assignment,
                            subcontract, delegation, or transfer in violation of the
                            foregoing will be null and void.  Company may freely assign
                            these Terms.  The terms and conditions set forth in these
                            Terms shall be binding upon assignees.
                        </li>
                        <li className="list-no-style">
                            10.7     <strong>Copyright/Trademark Information</strong>.
                            Copyright © 2018 Stable Insurance, Inc. All rights
                            reserved.  All trademarks, logos and service marks (“
                            <strong>Marks</strong>
                            ”) displayed on the Site are our property or the property of
                            other third parties. You are not permitted to use these
                            Marks without our prior written consent or the consent of
                            such third party which may own the Marks.
                        </li>
                        <li className="list-no-style">
                            10.8
                            <strong>
                                Contact Information:
                                <br />
                            </strong>
                            <p>
                                Stable Insurance, Inc. <br />
                                Email: hello@stableins.com
                            </p>
                            <strong>
                                <br />
                            </strong>
                        </li>
                    </ul>
                </div>
            </div>{" "}
        </Modal>
    )
}

export default TermsModal;